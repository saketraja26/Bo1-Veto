import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home, Brackets, Schedule, Results } from './pages';
import { useState } from 'react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <nav className="p-4 bg-gradient-to-r from-gray-800 to-gray-700 flex justify-between items-center shadow-lg">
          <h1 className="text-3xl font-extrabold text-yellow-400">Draw V</h1>
          <div className="space-x-6 text-lg">
            <Link to="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
            <Link to="/brackets" className="hover:text-yellow-400 transition duration-300">Brackets</Link>
            <Link to="/schedule" className="hover:text-yellow-400 transition duration-300">Schedule</Link>
            <Link to="/results" className="hover:text-yellow-400 transition duration-300">Results</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brackets" element={<Brackets />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

// pages/Home.js
export function Home() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to Draw V</h2>
      <p className="text-lg">Your ultimate Valorant esports experience begins here.</p>
    </div>
  );
}

// pages/Brackets.js
export function Brackets() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl font-bold mb-4">Tournament Brackets</h2>
      <p className="text-lg">View the latest tournament brackets and team standings.</p>
    </div>
  );
}

// pages/Schedule.js
export function Schedule() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl font-bold mb-4">Match Schedule</h2>
      <p className="text-lg">Stay updated with upcoming match timings.</p>
    </div>
  );
}

// pages/Results.js
export function Results() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl font-bold mb-4">Match Results</h2>
      <p className="text-lg">Check out the latest match results and highlights.</p>
    </div>
  );
}
