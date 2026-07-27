import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ServiceDetail from './components/ServiceDetail';
import FloatingContact from './components/FloatingContact';
import './App.css';

function App() {
  return (
    <Router>
      <FloatingContact />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;