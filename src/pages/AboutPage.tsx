import React from 'react';
import { Users, Award, Globe, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Anime Fans Served', value: '50K+', color: 'text-green-400' },
    { icon: Award, label: 'Exclusive Designs', value: '1000+', color: 'text-red-400' },
    { icon: Globe, label: 'Countries', value: '25+', color: 'text-blue-400' },
    { icon: Zap, label: 'Years of Passion', value: '5+', color: 'text-yellow-400' }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-green-400 to-red-500 bg-clip-text text-transparent">
              ABOUT ZX FASHION
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Born from the passion of anime culture and street fashion, ZX Fashion creates exclusive designs that let you wear your favorite anime with pride.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-black/40 rounded-2xl border border-purple-500/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <stat.icon className={`${stat.color} mx-auto mb-4 animate-pulse`} size={40} />
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-green-400">Anime</span> Journey
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                ZX Fashion was born in 2020 from a simple idea: anime fans deserve clothing that represents their passion with style and quality. What started as custom designs for friends has grown into a global community of anime enthusiasts.
              </p>
              <p>
                Every piece we create tells a story. From the iconic symbols of Naruto to the cyberpunk aesthetics of Ghost in the Shell, we transform anime art into wearable masterpieces that let you express your otaku identity with confidence.
              </p>
              <p>
                Our team of designers are lifelong anime fans who understand the culture, the references, and the passion that drives this community. We don't just make clothing – we create connections between fans worldwide.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/8122104/pexels-photo-8122104.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="ZX Fashion Design Process"
              className="w-full rounded-2xl shadow-2xl border-2 border-purple-500/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-red-400">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-green-900/20 to-black/40 rounded-2xl border border-green-500/20 hover:border-green-400/50 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quality First</h3>
              <p className="text-gray-400">Premium materials and attention to detail in every stitch, ensuring your anime gear lasts as long as your passion.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-red-900/20 to-black/40 rounded-2xl border border-red-500/20 hover:border-red-400/50 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community Driven</h3>
              <p className="text-gray-400">Designs inspired by and created for the anime community. Your feedback shapes every collection we release.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-900/20 to-black/40 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Impact</h3>
              <p className="text-gray-400">Connecting anime fans worldwide through fashion, creating a global community of like-minded individuals.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Meet the <span className="text-purple-400">Creators</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            A team of passionate anime fans and fashion designers working together to bring your favorite characters to life through streetwear.
          </p>
          
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-lg rounded-full hover:from-purple-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
            JOIN OUR JOURNEY
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;