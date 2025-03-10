import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Set favicon dynamically
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = 'https://raw.githubusercontent.com/Kagwi/mimagardens.github.io/main/Mima%20Gardens%20Logo.PNG';
    
    // Remove existing favicon if any
    const existingFavicon = document.querySelector("link[rel='icon']");
    if (existingFavicon) {
      document.head.removeChild(existingFavicon);
    }

    document.head.appendChild(link);

    // Set document title
    document.title = 'Mima Gardens';
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
