import React from 'react';
import { PlayCircle, Star } from 'lucide-react';


interface HeaderProps {
  onPageChange: (page: 'home' | 'shop' | 'about' | 'contact') => void;
}

const Hero: React.FC<HeaderProps> = ({ onPageChange }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="videos/promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Base Battle Scene */}

        {/* Animated Lightning Effects */}


        {/* Battle Impact Flashes */}
        <div className="absolute inset-0 bg-white/5 animate-battle-flash"></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
      </div>

      {/* Dynamic Energy Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/30 rounded-full blur-3xl animate-energy-orb-1"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/30 rounded-full blur-3xl animate-energy-orb-2"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl animate-energy-orb-3"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-float-particle-1"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400 rounded-full animate-float-particle-2"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-yellow-400 rounded-full animate-float-particle-3"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-float-particle-4"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="text-yellow-400 animate-spin" size={24} />
            <span className="text-green-400 font-bold tracking-wider uppercase">New Collection</span>
            <Star className="text-yellow-400 animate-spin" size={24} />
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-title-glow">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-red-500 bg-clip-text text-transparent">
              ANIME
            </span>
            <br />
            <span className="text-white drop-shadow-2xl animate-text-pulse">
              STREETWEAR
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where Japanese culture meets street fashion. Exclusive designs inspired by your favorite anime.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6" onClick={() => onPageChange('shop')}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/50 animate-button-glow">
            <span className="relative z-10" >SHOP NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </button>

          <button className="group flex items-center space-x-3 px-8 py-4 border-2 border-red-500 text-red-400 font-bold text-lg rounded-full hover:bg-red-500/10 hover:border-red-400 hover:text-red-300 transition-all duration-300 animate-border-glow">
            <PlayCircle size={24} />
            <span>Watch Lookbook</span>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-400 animate-counter">1000+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Designs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-red-400">50K+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Fans</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Drop</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;