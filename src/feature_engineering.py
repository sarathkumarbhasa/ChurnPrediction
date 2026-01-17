import pandas as pd

def create_features(df):
    df = df.copy()

    df['tenure_group'] = pd.cut(
        df['tenure'],
        bins=[0, 12, 24, 48, 72],
        labels=['0-1yr', '1-2yr', '2-4yr', '4-6yr']
    ).astype(str)   # 👈 THIS LINE FIXES THE ERROR

    df['high_monthly_charge'] = (df['MonthlyCharges'] > 80).astype(int)

    return df
