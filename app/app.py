import os
import streamlit as st
import joblib
import pandas as pd

# ---------- SAFE MODEL PATH ----------
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "models", "churn_model.pkl")

if not os.path.exists(MODEL_PATH):
    st.error(f"Model not found at: {MODEL_PATH}")
    st.stop()

model = joblib.load(MODEL_PATH)

# ---------- CANONICAL FEATURE SCHEMA ----------
FEATURE_COLUMNS = [
    "gender", "SeniorCitizen", "Partner", "Dependents", "tenure",
    "PhoneService", "MultipleLines", "InternetService",
    "OnlineSecurity", "OnlineBackup", "DeviceProtection",
    "TechSupport", "StreamingTV", "StreamingMovies",
    "Contract", "PaperlessBilling", "PaymentMethod",
    "MonthlyCharges", "TotalCharges",
    "tenure_group", "high_monthly_charge"
]

# ---------- STREAMLIT UI ----------
st.set_page_config(page_title="Churn Early Warning System")
st.title("📉 Customer Churn Early-Warning System")
st.sidebar.header("Customer Details")

# ---------- USER INPUT ----------
def user_input():
    gender = st.sidebar.selectbox("Gender", ["Male", "Female"])
    senior = st.sidebar.selectbox("Senior Citizen", [0, 1])
    partner = st.sidebar.selectbox("Partner", ["Yes", "No"])
    dependents = st.sidebar.selectbox("Dependents", ["Yes", "No"])

    tenure = st.sidebar.slider("Tenure (months)", 0, 72, 12)

    phone = st.sidebar.selectbox("Phone Service", ["Yes", "No"])
    multiline = st.sidebar.selectbox(
        "Multiple Lines", ["Yes", "No", "No phone service"]
    )

    internet = st.sidebar.selectbox("Internet Service", ["DSL", "Fiber optic", "No"])
    online_sec = st.sidebar.selectbox(
        "Online Security", ["Yes", "No", "No internet service"]
    )
    online_backup = st.sidebar.selectbox(
        "Online Backup", ["Yes", "No", "No internet service"]
    )
    device_prot = st.sidebar.selectbox(
        "Device Protection", ["Yes", "No", "No internet service"]
    )
    tech_support = st.sidebar.selectbox(
        "Tech Support", ["Yes", "No", "No internet service"]
    )
    streaming_tv = st.sidebar.selectbox(
        "Streaming TV", ["Yes", "No", "No internet service"]
    )
    streaming_movies = st.sidebar.selectbox(
        "Streaming Movies", ["Yes", "No", "No internet service"]
    )

    contract = st.sidebar.selectbox(
        "Contract", ["Month-to-month", "One year", "Two year"]
    )
    paperless = st.sidebar.selectbox("Paperless Billing", ["Yes", "No"])
    payment = st.sidebar.selectbox(
        "Payment Method",
        ["Electronic check", "Mailed check", "Bank transfer", "Credit card"]
    )

    monthly = st.sidebar.slider("Monthly Charges", 20, 120, 70)

    # ✅ FIXED: all numeric args are floats
    total = st.sidebar.number_input(
        "Total Charges",
        min_value=0.0,
        value=float(monthly * tenure),
        step=1.0
    )

    # ---------- FEATURE ENGINEERING (MATCHES TRAINING) ----------
    tenure_group = pd.cut(
        [tenure],
        bins=[0, 12, 24, 48, 72],
        labels=["0-1yr", "1-2yr", "2-4yr", "4-6yr"]
    )[0]

    high_monthly_charge = int(monthly > 80)

    return {
        "gender": gender,
        "SeniorCitizen": senior,
        "Partner": partner,
        "Dependents": dependents,
        "tenure": tenure,
        "PhoneService": phone,
        "MultipleLines": multiline,
        "InternetService": internet,
        "OnlineSecurity": online_sec,
        "OnlineBackup": online_backup,
        "DeviceProtection": device_prot,
        "TechSupport": tech_support,
        "StreamingTV": streaming_tv,
        "StreamingMovies": streaming_movies,
        "Contract": contract,
        "PaperlessBilling": paperless,
        "PaymentMethod": payment,
        "MonthlyCharges": float(monthly),
        "TotalCharges": float(total),
        "tenure_group": str(tenure_group),
        "high_monthly_charge": high_monthly_charge
    }

# ---------- SCHEMA ENFORCEMENT ----------
def build_input_df(user_input: dict) -> pd.DataFrame:
    row = {col: None for col in FEATURE_COLUMNS}
    row.update(user_input)
    return pd.DataFrame([row])

# ---------- PREDICTION ----------
input_data = user_input()

if st.button("Predict Churn Risk"):
    df = build_input_df(input_data)
    prob = model.predict_proba(df)[0][1]

    st.subheader(f"Churn Probability: {prob:.2f}")

    if prob > 0.7:
        st.error("⚠️ High churn risk – Immediate action required")
    elif prob > 0.4:
        st.warning("⚠️ Medium churn risk")
    else:
        st.success("✅ Low churn risk")
