const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Volunteer = require('./models/Volunteer');
const Newsletter = require('./models/Newsletter');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
