import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import roc_auc_score

from data_preprocessing import load_and_clean_data
from feature_engineering import create_features

DATA_PATH = "data/raw/telco_churn.csv"
MODEL_PATH = "models/churn_model.pkl"

def train():
    df = load_and_clean_data(DATA_PATH)
    df = create_features(df)

    X = df.drop('Churn', axis=1)
    y = df['Churn']

    cat_cols = X.select_dtypes(include='object').columns
    num_cols = X.select_dtypes(exclude='object').columns

    preprocessor = ColumnTransformer(
        transformers=[
            ('cat', OneHotEncoder(handle_unknown='ignore'), cat_cols),
            ('num', 'passthrough', num_cols)
        ]
    )

    model = RandomForestClassifier(
        n_estimators=200,
        max_depth=8,
        class_weight='balanced',
        random_state=42
    )

    pipeline = Pipeline(steps=[
        ('preprocessor', preprocessor),
        ('model', model)
    ])

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, stratify=y, random_state=42
    )

    pipeline.fit(X_train, y_train)

    y_pred_prob = pipeline.predict_proba(X_test)[:, 1]
    auc = roc_auc_score(y_test, y_pred_prob)

    print(f"ROC-AUC Score: {auc:.3f}")

    joblib.dump(pipeline, MODEL_PATH)
    print("Model saved successfully!")

if __name__ == "__main__":
    train()
