FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Set environment variables for Django
ENV DJANGO_SETTINGS_MODULE=bail_system.settings

EXPOSE 8000

CMD ["python", "backend/manage.py", "runserver", "0.0.0.0:8000"]
