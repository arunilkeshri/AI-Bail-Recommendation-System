import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import os

# Placeholder for creating dummy data
def create_dummy_data(num_samples=1000):
    np.random.seed(42)
    data = {
        'age': np.random.randint(18, 70, size=num_samples),
        'prior_convictions': np.random.randint(0, 10, size=num_samples),
        'recidivism_risk': np.random.rand(num_samples), # Continuous score between 0 and 1
    }
    df = pd.DataFrame(data)
    return df

if __name__ == "__main__":
    print("Training TensorFlow model...")

    # Generate and preprocess dummy data
    df = create_dummy_data()
    X = df[['age', 'prior_convictions']].values
    y = df['recidivism_risk'].values

    # Build a simple TensorFlow model
    model = keras.Sequential([
        layers.Dense(64, activation='relu', input_shape=(X.shape[1],)),
        layers.Dense(32, activation='relu'),
        layers.Dense(1, activation='sigmoid') # Output a single value between 0 and 1
    ])

    # Compile the model
    model.compile(optimizer='adam',
                  loss='mean_squared_error',
                  metrics=['mae'])

    # Train the model
    model.fit(X, y, epochs=10, batch_size=32, verbose=1)

    # Save the trained model
    model_dir = os.path.dirname(os.path.abspath(__file__))
    model_path = os.path.join(model_dir, 'tensorflow_model.h5')
    model.save(model_path)

    print(f"TensorFlow model trained and saved to {model_path}")
    
    # You can now test the model
    sample_input = np.array([[35, 2]])
    prediction = model.predict(sample_input)[0][0]
    print(f"Prediction for age 35, 2 convictions: {prediction:.4f}")
