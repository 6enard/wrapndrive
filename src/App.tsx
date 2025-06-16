import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import BookNow from './components/BookNow';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/book" element={<BookNow />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;