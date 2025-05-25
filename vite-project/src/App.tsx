import React, { useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import './app.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
};

export default App;
