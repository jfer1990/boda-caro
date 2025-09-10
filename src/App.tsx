import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ParentsSection from './components/ParentsSection';
import ParentsThought from './components/ParentsThought';
import PhotoGallery from './components/PhotoGallery';
import EventDetails from './components/EventDetails';
import RSVPForm from './components/RSVPForm';
import GiftSection from './components/GiftSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-ivory">
              <HeroSection />
              <ParentsSection />
              <ParentsThought />
              <PhotoGallery />
              <EventDetails />
              <RSVPForm />
              <GiftSection />
              <Footer />
            </div>
          }
        />

        {/* Ruta específica por slug */}
        <Route
          path="/rsvp/:slug"
          element={
            <div className="min-h-screen bg-ivory">
              <HeroSection />
              <ParentsSection />
              <ParentsThought />
              <PhotoGallery />
              <EventDetails />
              <RSVPForm />
              <GiftSection />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
