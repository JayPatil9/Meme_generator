import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import MainContent from './components/Meme';
import './App.css';
import logo from './logo.svg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Navbar />
    <Meme />
  </div>
);
