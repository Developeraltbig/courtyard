import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 1. Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Import your custom CSS for overrides (must come AFTER Bootstrap)
import './assets/css/App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);