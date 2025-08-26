import React from 'react';
import HeroSection from './components/HeroSection';
import ParentsSection from './components/ParentsSection';
import ParentsThought from './components/ParentsThought';
import PhotoGallery from './components/PhotoGallery';
import EventDetails from './components/EventDetails';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <HeroSection />
      <ParentsSection />
      <ParentsThought />
      <PhotoGallery />
      <EventDetails />
      <RSVPForm />
      <Footer />
    </div>
  );
}

export default App;