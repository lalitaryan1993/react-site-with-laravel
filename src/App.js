import React from 'react';
import './asset/css/custom.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div style={{ width: '100%' }}>
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
