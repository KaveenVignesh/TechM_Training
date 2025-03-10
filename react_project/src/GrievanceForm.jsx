import React, { useState } from 'react';
import axios from 'axios';

const GrievanceForm = ({ user, setPage }) => {
  const [grievance, setGrievance] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to store the grievance
      await axios.post('http://localhost:4500/grievances', {
        user,
        grievance,
      });

      alert('Grievance submitted successfully!');
      setGrievance('');
      setPage('voting'); // Redirect to voting page
    } catch (error) {
      console.error('Error submitting grievance:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Grievance Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Grievance</label>
          <textarea
            className="form-control"
            value={grievance}
            onChange={(e) => setGrievance(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit Grievance
        </button>
        <button
          className="btn btn-secondary mt-3 ms-3"
          onClick={() => setPage('voting')}
        >
          Back to Voting
        </button>
      </form>
    </div>
  );
};

export default GrievanceForm;