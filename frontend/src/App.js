import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CaseList from './components/CaseList';
import Recommendation from './components/Recommendation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>AI Bail Recommendation System</h1>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cases" element={<CaseList />} />
            <Route path="/recommendation/:caseId" element={<Recommendation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
