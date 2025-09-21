import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CaseList() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    // Fetch cases from the backend
    axios.get('http://localhost:8000/api/v1/cases/')
      .then(response => {
        setCases(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cases!', error);
      });
  }, []);

  return (
    <div className="case-list-container">
      <h2>Case List</h2>
      <table className="case-table">
        <thead>
          <tr>
            <th>Case Number</th>
            <th>Defendant Name</th>
            <th>Crime Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cases.map(caseItem => (
            <tr key={caseItem.id}>
              <td>{caseItem.case_number}</td>
              <td>{caseItem.defendant_name}</td>
              <td>{caseItem.crime_type}</td>
              <td>
                <Link to={`/recommendation/${caseItem.id}`}>
                  Get Recommendation
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CaseList;
