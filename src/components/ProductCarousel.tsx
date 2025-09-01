import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../data/products';

interface ProductCarouselProps {
  title: string;
  products: Product[];
  category?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products, category }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newScrollPosition = scrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6 px-4 md:px-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{title}</h2>
          {category && (
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 text-sm font-medium uppercase tracking-wide">{category}</span>
            </div>
          )}
        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 bg-purple-900/50 hover:bg-purple-800 border border-purple-500/30 hover:border-green-400 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} className="text-gray-300 hover:text-green-400" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 bg-purple-900/50 hover:bg-purple-800 border border-purple-500/30 hover:border-green-400 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} className="text-gray-300 hover:text-green-400" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;