import React from 'react';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import { featuredProducts, newDrops, limitedEdition } from '../data/products';
import { Zap, Flame, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Featured Collections */}
      <section className="py-16">
        <ProductCarousel 
          title="Featured Collections" 
          products={featuredProducts}
          category="Trending Now"
        />
      </section>

      {/* Promo Banner */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-red-500/20 via-purple-600/20 to-green-400/20 rounded-3xl border border-purple-500/30 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-green-400/10 animate-pulse"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Flame className="text-red-400 animate-pulse" size={32} />
              <h2 className="text-3xl md:text-5xl font-black text-white">EXCLUSIVE DROP</h2>
              <Flame className="text-red-400 animate-pulse" size={32} />
            </div>
            <p className="text-xl text-gray-300 mb-6">Limited time offer: 30% off on all anime collections</p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-black font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-green-400/50">
              CLAIM OFFER
            </button>
          </div>
        </div>
      </section>

      {/* New Drops */}
      <section className="py-8">
        <ProductCarousel 
          title="New Drops" 
          products={newDrops}
          category="Fresh Releases"
        />
      </section>

      {/* Limited Edition */}
      <section className="py-8">
        <ProductCarousel 
          title="Limited Edition" 
          products={limitedEdition}
          category="Exclusive"
        />
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="text-yellow-400 animate-spin" size={24} />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Stay Updated</h2>
            <Star className="text-yellow-400 animate-spin" size={24} />
          </div>
          <p className="text-xl text-gray-300 mb-8">Get notified about new anime collections and exclusive drops</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-6 py-3 bg-purple-900/30 border border-purple-500/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all duration-300"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full hover:from-red-400 hover:to-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;