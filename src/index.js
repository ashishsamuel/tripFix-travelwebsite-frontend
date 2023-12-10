import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Contexts/AuthContext';
import NavigateLinkAuth from './Contexts/NavigateLinkAuth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <NavigateLinkAuth>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NavigateLinkAuth>
    </AuthContextProvider>
   
  </React.StrictMode>
);
