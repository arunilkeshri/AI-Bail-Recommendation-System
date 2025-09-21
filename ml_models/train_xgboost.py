import pandas as pd
import numpy as np
import xgboost as xgb
import joblib
import os

# Placeholder for creating dummy data
def create_dummy_data(num_samples=1000):
    np.random.seed(42)
    data = {
        'age': np.random.randint(18, 70, size=num_samples),
        'prior_convictions': np.random.randint(0, 10, size=num_samples),
        'crime_type': np.random.choice(['theft', 'assault', 'fraud', 'other'], size=num_samples),
        'flight_risk': np.random.randint(0, 2, size=num_samples), # 0 = Low, 1 = High
    }
    df = pd.DataFrame(data)
    return df

if __name__ == "__main__":
    print("Training XGBoost model...")
    
    # Generate and preprocess dummy data
    df = create_dummy_data()
    X = df[['age', 'prior_convictions']]
    y = df['flight_risk']

    # Initialize and train the XGBoost model
    model = xgb.XGBClassifier(n_estimators=100, use_label_encoder=False, eval_metric='logloss')
    model.fit(X, y)

    # Save the trained model
    model_dir = os.path.dirname(os.path.abspath(__file__))
    model_path = os.path.join(model_dir, 'xgboost_model.pkl')
    joblib.dump(model, model_path)

    print(f"XGBoost model trained and saved to {model_path}")
    
    # You can now test the model
    sample_input = pd.DataFrame([{'age': 35, 'prior_convictions': 2}])
    prediction = model.predict_proba(sample_input)[:, 1]
    print(f"Prediction for age 35, 2 convictions: {prediction[0]:.4f}")
