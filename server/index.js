const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const morgan = require('morgan');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const Volunteer = require('./models/Volunteer');
const Newsletter = require('./models/Newsletter');

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Production Middlewares
app.use(helmet({ contentSecurityPolicy: false })); // Disabled CSP to allow external images
app.use(compression());
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

// API Rate Limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: { message: 'Too many requests, please try again later.' }
});
app.use('/api/', apiLimiter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sun_ngo';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes
app.post('/api/volunteer', async (req, res) => {
    try {
        const { fullName, email, phoneNumber, domain, reason } = req.body;

        if (!fullName || !email || !phoneNumber || !domain || !reason) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newVolunteer = new Volunteer({
            fullName,
            email,
            phoneNumber,
            domain,
            reason
        });

        await newVolunteer.save();
        res.status(201).json({ message: 'Volunteer registration successful', data: newVolunteer });
    } catch (error) {
        console.error('Error saving volunteer:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/api/newsletter', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        const existingSubscriber = await Newsletter.findOne({ email });
        if (existingSubscriber) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }

        const newSubscriber = new Newsletter({ email });
        await newSubscriber.save();

        res.status(201).json({ message: 'Newsletter subscription successful' });
    } catch (error) {
        console.error('Error in newsletter subscription:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Test route
app.get('/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err);
    res.status(500).json({ message: 'An unexpected error occurred.' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}

module.exports = app;
