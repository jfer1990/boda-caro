import React from 'react';
import { Heart, Calendar } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-soft-beige to-muted-green opacity-90">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')] bg-cover bg-center bg-fixed opacity-20"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-16 w-1 h-1 bg-gold rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-gold rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-gold rounded-full animate-pulse opacity-30 animation-delay-3000"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <Heart className="w-8 h-8 text-gold mx-auto mb-6 animate-pulse" fill="currentColor" />
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-tight">
          Elena Carolina
          <span className="block text-3xl md:text-4xl lg:text-5xl text-muted-green mt-2 font-light">
            &
          </span>
          <span className="block">Esteban</span>
        </h1>
        
        <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
        
        <p className="text-lg md:text-xl text-charcoal/80 mb-8 font-light leading-relaxed">
          Nos complace invitarte a celebrar nuestra unión en matrimonio
        </p>
        
        <div className="flex items-center justify-center gap-3 text-muted-green">
          <Calendar className="w-5 h-5" />
          <span className="text-lg font-medium">Próximamente</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;