import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Recommendation() {
  const { caseId } = useParams();
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch a single case and get the recommendation
    const fetchRecommendation = async () => {
      setLoading(true);
      try {
        const response = await axios.post(`http://localhost:8000/api/v1/cases/${caseId}/recommend_bail/`);
        setCaseData(response.data);
      } catch (error) {
        console.error('Error getting bail recommendation:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendation();
  }, [caseId]);

  if (loading) {
    return <div className="loading-state">Generating recommendation...</div>;
  }

  if (!caseData) {
    return <div className="error-state">No recommendation found for this case.</div>;
  }

  return (
    <div className="recommendation-container">
      <h2>Bail Recommendation for Case: {caseData.case_number}</h2>
      <div className="case-details">
        <p><strong>Defendant:</strong> {caseData.defendant_name}</p>
        <p><strong>Age:</strong> {caseData.age}</p>
        <p><strong>Prior Convictions:</strong> {caseData.prior_convictions}</p>
        <p><strong>Crime Type:</strong> {caseData.crime_type}</p>
      </div>
      <div className="ai-scores">
        <h3>AI-Generated Scores</h3>
        <p><strong>Flight Risk Score:</strong> {caseData.flight_risk_score ? caseData.flight_risk_score.toFixed(4) : 'N/A'}</p>
        <p><strong>Recidivism Score:</strong> {caseData.recidivism_score ? caseData.recidivism_score.toFixed(4) : 'N/A'}</p>
      </div>
      <div className="final-recommendation">
        <h3>Recommendation</h3>
        <p className="recommendation-text">{caseData.bail_recommendation}</p>
      </div>
    </div>
  );
}

export default Recommendation;
