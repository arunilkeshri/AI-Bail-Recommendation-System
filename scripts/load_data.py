import pandas as pd
import os

def load_data(filepath):
    """
    Placeholder function to load data from a file.
    In a real project, this would handle different data formats (CSV, JSON, etc.)
    and perform initial checks.
    """
    if not os.path.exists(filepath):
        print(f"Error: File not found at {filepath}")
        return None
    
    try:
        # Assuming the data is a CSV file
        df = pd.read_csv(filepath)
        print(f"Successfully loaded data from {filepath}")
        return df
    except Exception as e:
        print(f"An error occurred while loading the data: {e}")
        return None

if __name__ == '__main__':
    # Placeholder usage
    raw_data_path = 'data/raw/raw_cases.csv'
    
    # Create a dummy raw data file if it doesn't exist
    if not os.path.exists(raw_data_path):
        dummy_data = {
            'case_id': [1, 2, 3],
            'age': [25, 45, 30],
            'prior_convictions': [0, 3, 1],
            'outcome': [0, 1, 0]
        }
        pd.DataFrame(dummy_data).to_csv(raw_data_path, index=False)
        print(f"Created a dummy raw data file at {raw_data_path}")

    df = load_data(raw_data_path)
    if df is not None:
        print("\nFirst 5 rows of the loaded data:")
        print(df.head())
