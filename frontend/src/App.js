import './App.css';
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [page, setPage] = useState('login');
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="container">
      <h1>CRUD APP</h1>
      {!isLoggedIn ? (
        <>
          <button onClick={() => setPage('login')} aria-pressed={page === 'login'}>
            Login
          </button>
          <button onClick={() => setPage('register')} aria-pressed={page === 'register'}>
            Register
          </button>
          {page === 'login' ? (
            <LoginPage onLogin={() => setPage('dashboard')} />
          ) : (
            <RegisterPage />
          )}
        </>
      ) : (
        <>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              window.location.reload();
            }}
          >
            Logout
          </button>
          <DashboardPage />
        </>
      )}
    </div>
  );
}

export default App;
