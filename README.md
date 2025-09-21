# ⚖️ AI-Bail-Recommendation-System 

An AI-powered system to assist judges in making informed bail decisions. This project leverages machine learning models to analyze a defendant's profile and recommend appropriate bail conditions, aiming for consistency and fairness in the justice system.

### ✨ Features
- **Predictive Analytics**: Utilizes XGBoost and TensorFlow models to predict flight risk and recidivism.
- **Secure Backend**: A robust Django REST Framework API for handling data and user authentication.
- **Interactive Frontend**: A modern React-based dashboard for viewing case data and AI recommendations.
- **Containerized Deployment**: Ready for production with Docker and Kubernetes configurations.

### 🛠️ Getting Started
Follow these steps to get the project up and running locally.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/AI-Bail-Recommendation-System.git](https://github.com/your-username/AI-Bail-Recommendation-System.git)
    cd AI-Bail-Recommendation-System
    ```

2.  **Spin up the services with Docker Compose:**
    ```bash
    docker-compose up --build
    ```

3.  **Access the applications:**
    -   Backend API: `http://localhost:8000`
    -   Frontend: `http://localhost:3000`
