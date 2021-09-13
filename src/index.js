import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/css/main.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App className="App" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
