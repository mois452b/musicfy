import Dashboard from './components/dashboard/Dashboard';
import './app.css'
import LoginPage from './components/Login';
import React, { useState } from 'react';

const App = () => {

  const [token, setToken] = useState<string>('');

  return (
    <div className="App">
      {token ? <Dashboard/> : null}
      {!token && <LoginPage setToken={setToken} />}

    </div>
  );
};

export default App;
