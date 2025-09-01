import React, { useState } from 'react';
import { Filter, Grid, List, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../data/products';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'NARUTO', 'JJK', 'ONE PICES', 'ATTACKR', 'DROGEN BALL'];

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-green-400 to-red-500 bg-clip-text text-transparent">
              ANIME SHOP
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover exclusive anime-inspired streetwear designed for true otaku culture enthusiasts
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search anime collections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-purple-900/30 border border-purple-500/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all duration-300"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-400 to-green-600 text-black shadow-lg shadow-green-400/30'
                    : 'bg-purple-900/30 text-gray-300 border border-purple-500/30 hover:border-green-400/50 hover:text-green-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400">
              <Filter size={16} />
              <span className="text-sm">{filteredProducts.length} items found</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-purple-900/30 rounded-full p-1 border border-purple-500/30">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-green-400 text-black' 
                    : 'text-gray-400 hover:text-green-400'
                }`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-green-400 text-black' 
                    : 'text-gray-400 hover:text-green-400'
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-full hover:from-purple-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
            LOAD MORE ITEMS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;