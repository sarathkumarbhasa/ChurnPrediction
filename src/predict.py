import joblib
import pandas as pd

MODEL_PATH = "models/churn_model.pkl"

def predict_churn(input_data: dict):
    model = joblib.load(MODEL_PATH)
    df = pd.DataFrame([input_data])

    prob = model.predict_proba(df)[0][1]
    return prob
