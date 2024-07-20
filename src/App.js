import React from 'react';
import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<h1 className='default-route'>Route not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
