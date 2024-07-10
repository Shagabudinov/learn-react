import React, { createContext, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './tailwind.css';

const isShouldRedirectToWelcome = localStorage.getItem('isShouldRedirectToWelcome');
isShouldRedirectToWelcome ?? localStorage.setItem('isShouldRedirectToWelcome', 'true');

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
);
