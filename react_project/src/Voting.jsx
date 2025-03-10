import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Voting = ({ user, logout, setPage }) => {
  const [candidates, setCandidates] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:4500/candidates');
        setCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  const handleVote = async (candidateId) => {
    try {
      const votesResponse = await axios.get('http://localhost:4500/votes');
      if (votesResponse.data.some((vote) => vote.user === user)) {
        alert('You have already voted.');
        return;
      }

      await axios.post('http://localhost:4500/votes', {
        user,
        candidateId,
      });

      setHasVoted(true);
      alert('Vote cast successfully!');
    } catch (error) {
      console.error('Error casting vote:', error);
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">Voting</h2>
      {hasVoted ? (
        <p className="text-center">You have already voted. Thank you!</p>
      ) : (
        <ul className="list-group">
          {candidates.map((candidate) => (
            <li key={candidate.id} className="list-group-item">
              {candidate.name}
              <button
                className="btn btn-success float-end"
                onClick={() => handleVote(candidate.id)}
              >
                Vote
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 d-flex justify-content-between">
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setPage('add-candidate')}
        >
          Add Candidate
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setPage('add-user')}
        >
          Add User
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setPage('grievance')}
        >
          Submit Grievance
        </button>
      </div>
    </div>
  );
};

export default Voting;