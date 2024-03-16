import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, Navigate } from 'react-router-dom';
import App from './App.tsx';
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
