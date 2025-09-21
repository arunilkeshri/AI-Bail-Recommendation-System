from django.db import models

class Case(models.Model):
    case_number = models.CharField(max_length=255, unique=True)
    defendant_name = models.CharField(max_length=255)
    age = models.IntegerField()
    crime_type = models.CharField(max_length=255)
    prior_convictions = models.IntegerField()
    flight_risk_score = models.FloatField(null=True, blank=True)
    recidivism_score = models.FloatField(null=True, blank=True)
    bail_recommendation = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Case: {self.case_number} - {self.defendant_name}"
