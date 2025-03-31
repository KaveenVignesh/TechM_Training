import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ setPage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to add a new user
      await axios.post('http://localhost:4500/users', {
        username,
        password,
      });
      alert('User added successfully!');
      setUsername('');
      setPassword('');
      setPage('voting'); // Redirect to voting page
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add User
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

export default AddUser;