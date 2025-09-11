import React from 'react';
import { Heart, Clock, Star } from 'lucide-react';
import StarryBackground from './StarryBackground';
import bodaCaro2 from '../assets/images/bodacaro4.png';
import background from '../assets/images/bodacaro1.jpg';



const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ivory via-cream to-soft-blue/20">
      <StarryBackground />
      
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')] bg-cover bg-center opacity-10"></div> */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="absolute top-20 left-10 w-3 h-3 bg-gold/30 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-16 w-2 h-2 bg-muted-green/40 rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-2.5 h-2.5 bg-gold/20 rounded-full animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-24 right-12 w-3 h-3 bg-soft-blue/30 rounded-full animate-pulse animation-delay-3000"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 relative">
          <div 
          className="absolute flex justify-center items-center gap-3 mb-6"
          style={{
            bottom: "0",
            left: "50%",
            transform: "translate(-50%, 50%)",
            marginBottom: "-15px"}}
    >
            <Star className="w-5 h-5 text-gold animate-pulse" fill="currentColor" />
            <Clock className="w-6 h-6 text-muted-green" />
            <Star className="w-5 h-5 text-gold animate-pulse" fill="currentColor" />
          </div>
            <img
            style={{objectFit:'contain', height:'100%', margin:'auto', maxWidth:'50vw'}}
                src={bodaCaro2}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-tight">
          Elena Carolina 
          <span className="block text-2xl md:text-3xl lg:text-4xl text-muted-green mt-3 font-light">
            &
          </span>
          <span className="block mt-2">Esteban </span>
        </h1>
        
        <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
        
        <p className="text-lg md:text-xl text-charcoal text-opacity-80 mb-8 font-light leading-relaxed">
          Nos complace invitarte a celebrar nuestra unión en matrimonio
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gold/20 shadow-soft max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 text-muted-green mb-4">
            <Clock className="w-5 h-5" />
            <span className="text-lg font-medium">Fecha de la Ceremonia</span>
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-2">
            4 de Octubre
          </h2>
          
          <p className="text-lg text-charcoal text-opacity-70 mb-3">
            Mérida, Yucatán
          </p>
          
          <div className="bg-gold/10 rounded-lg p-3 border border-gold/30">
            <p className="text-sm text-charcoal text-opacity-60 mb-1">Hora de la ceremonia</p>
            <p className="text-lg font-semibold text-charcoal">18:00 hrs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;