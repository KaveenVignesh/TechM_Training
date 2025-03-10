import React from 'react';
import './App.css'; // Import the CSS file
import Login from './Login';
import Voting from './Voting';
import AddCandidate from './AddCandidate';
import AddUser from './AddUser';
import GrievanceForm from './GrievanceForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [page, setPage] = React.useState('login');

  const login = (username) => {
    setUser(username);
    setPage('voting');
  };

  const logout = () => {
    setUser(null);
    setPage('login');
  };

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <Login login={login} />;
      case 'voting':
        return <Voting user={user} logout={logout} setPage={setPage} />;
      case 'add-candidate':
        return <AddCandidate setPage={setPage} />;
      case 'add-user':
        return <AddUser setPage={setPage} />;
      case 'grievance':
        return <GrievanceForm user={user} setPage={setPage} />;
      default:
        return <Login login={login} />;
    }
  };

  return <div className="container">{renderPage()}</div>;
};

export default App;