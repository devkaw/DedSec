import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatrixRain from './components/MatrixRain';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Recruitment from './pages/Recruitment';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white relative overflow-hidden">
        <MatrixRain />
        <Navbar />
        <main className="container mx-auto px-4 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/recruitment" element={<Recruitment />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;