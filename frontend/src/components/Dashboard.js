import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard</h2>
      <p>Select an option to get started:</p>
      <ul>
        <li>
          <Link to="/cases">View All Cases</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
