import React, { useState } from 'react';
import axios from 'axios';

const AddCandidate = ({ setPage }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to add a new candidate
      await axios.post('http://localhost:4500/candidates', { name });
      alert('Candidate added successfully!');
      setName('');
      setPage('voting'); // Redirect to voting page
    } catch (error) {
      console.error('Error adding candidate:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Candidate</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Candidate Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Candidate
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

export default AddCandidate;