import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './components/Context/AuthContext';
import { RenewedProvider } from './components/Context/RenewedConext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <RenewedProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </RenewedProvider>
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();