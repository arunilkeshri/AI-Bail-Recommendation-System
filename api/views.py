from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Case
from .serializers import CaseSerializer
import joblib
import os
import tensorflow as tf
import numpy as np
import pandas as pd

class CaseViewSet(viewsets.ModelViewSet):
    queryset = Case.objects.all().order_by('-created_at')
    serializer_class = CaseSerializer

    def get_ml_models(self):
        # Load the models from the ml_models directory
        try:
            xgboost_model_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'ml_models', 'xgboost_model.pkl')
            tensorflow_model_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'ml_models', 'tensorflow_model.h5')

            xgboost_model = joblib.load(xgboost_model_path)
            tensorflow_model = tf.keras.models.load_model(tensorflow_model_path)
            return xgboost_model, tensorflow_model
        except FileNotFoundError:
            return None, None

    @action(detail=True, methods=['post'])
    def recommend_bail(self, request, pk=None):
        case = self.get_object()
        xgboost_model, tensorflow_model = self.get_ml_models()

        if not xgboost_model or not tensorflow_model:
            return Response({'error': 'ML models not found. Please train and save them.'}, status=500)

        # Create a pandas DataFrame from the case data for prediction
        input_data = pd.DataFrame([{
            'age': case.age,
            'prior_convictions': case.prior_convictions,
            'crime_type': case.crime_type # You'll need to handle categorical variables
        }])

        # Placeholder for feature engineering/preprocessing
        # For a real system, you'd encode 'crime_type' etc.
        input_data = pd.DataFrame([{'age': case.age, 'prior_convictions': case.prior_convictions}])

        # Get predictions
        flight_risk_score = xgboost_model.predict(input_data)[0]
        recidivism_score = tensorflow_model.predict(input_data)[0][0]

        # Determine bail recommendation based on scores
        recommendation = "Low Bail"
        if flight_risk_score > 0.7 or recidivism_score > 0.8:
            recommendation = "High Bail or No Bail"
        elif flight_risk_score > 0.4 or recidivism_score > 0.5:
            recommendation = "Medium Bail with Conditions"

        # Update the case with the recommendation
        case.flight_risk_score = float(flight_risk_score)
        case.recidivism_score = float(recidivism_score)
        case.bail_recommendation = recommendation
        case.save()

        serializer = self.get_serializer(case)
        return Response(serializer.data)
