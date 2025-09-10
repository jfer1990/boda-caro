import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, Star } from 'lucide-react';
import bodaCaro1 from '../assets/images/bodaGal1.jpg'; 
import bodaCaro2 from '../assets/images/bodaGal2.jpg'; 
import bodaCaro3 from '../assets/images/bodaGal3.jpg'; 
import bodaCaro4 from '../assets/images/bodaGal4.jpg'; 
import bodaCaro5 from '../assets/images/bodaGal5.jpg'; 
import bodaCaro6 from '../assets/images/bodaGal6.jpg'; 



const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const photos = [
    {
      id: 1,
      src: bodaCaro1,
      alt: 'Elena Carolina y Esteban - Momento romántico'
    },
    {
      id: 2,
      src: bodaCaro2,
      alt: 'Elena Carolina y Esteban - Sonrisas'
    },
    {
      id: 3,
      src: bodaCaro3,
      alt: 'Elena Carolina y Esteban - Celebración'
    },
    {
      id: 4,
      src: bodaCaro4,
      alt: 'Elena Carolina y Esteban - Baile juntos'
    },
    {
      id: 5,
      src: bodaCaro5,
      alt: 'Elena Carolina y Esteban - Detalles de la boda'
    },
    {
      id: 6,
      src: bodaCaro6,
      alt: 'Elena Carolina y Esteban - Familia y amigos'
    },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="absolute top-16 right-8 w-1.5 h-1.5 bg-gold/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-12 left-10 w-2 h-2 bg-soft-blue/20 rounded-full animate-pulse animation-delay-3000"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Star className="w-4 h-4 text-gold animate-pulse" fill="currentColor" />
            <Camera className="w-8 h-8 text-gold" />
            <Star className="w-4 h-4 text-gold animate-pulse animation-delay-1000" fill="currentColor" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Nuestros Momentos
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal text-opacity-70 max-w-2xl mx-auto">
            Cada fotografía cuenta una parte de nuestra historia de amor
          </p>
        </div>
        
        {/* Masonry Grid */}
        <div className='flex justify-center'>
        <div className="carousel carousel-center bg-neutral rounded-box max-w-sm space-x-4 p-4">
          {photos.map((photo, index) => (
          <div
           className="carousel-item"
           onClick={() => openModal(index)}
           >
             <div className="w-72 sm:w-56 xs:w-48 aspect-[3/2]">
            <img
              src={photo.src}
              className="rounded-box w-full h-full object-cover"/>
              </div>
          </div>))}
        </div>
        </div>
        {/* <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-lg transition-all duration-500 group-hover:scale-[1.02]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-gold/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div> */}
        
        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gold transition-colors duration-200 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors duration-200 bg-black/30 rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors duration-200 bg-black/30 rounded-full p-2"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;