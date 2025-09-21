import os
import django
import random
from datetime import datetime

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bail_system.settings')
django.setup()

from api.models import Case

def seed_database():
    print("Seeding database with placeholder case data...")
    Case.objects.all().delete() # Clear existing data
    
    crime_types = ['Theft', 'Assault', 'Fraud', 'Drug Possession', 'Vandalism']

    for i in range(20):
        case_number = f"CASE-{random.randint(10000, 99999)}"
        defendant_name = f"Defendant {i+1}"
        age = random.randint(18, 65)
        crime_type = random.choice(crime_types)
        prior_convictions = random.randint(0, 5)

        Case.objects.create(
            case_number=case_number,
            defendant_name=defendant_name,
            age=age,
            crime_type=crime_type,
            prior_convictions=prior_convictions
        )

    print(f"Successfully seeded {Case.objects.count()} cases.")

if __name__ == '__main__':
    seed_database()
