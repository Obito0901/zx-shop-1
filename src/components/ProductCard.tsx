import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Buy Button action
  function handleBuy(product:Product) {
    let data = product["image"]
    let img =(window.origin+"/"+data);
    product["image"] = img;
    

    window.open("https://api.whatsapp.com/send?phone=9345916715&text="+ JSON.stringify(product))
  }
  
  return (
    <div className="group relative flex-shrink-0 w-72 md:w-80 bg-gradient-to-br from-purple-900/20 to-black/40 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/20">
      {/* Product Image */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Hover Actions */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-2">
          <button className="p-2 bg-red-500/80 hover:bg-red-500 rounded-full transition-all duration-300 hover:scale-110">
            <Heart size={16} className="text-white" />
          </button>
        </div>

        {/* Quick Buy */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <button onClick={()=>handleBuy(product)} className="w-full py-3 bg-gradient-to-r from-green-400 to-green-600 text-black font-bold text-sm rounded-full hover:from-green-300 hover:to-green-500 transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-green-400/30">
            <ShoppingCart size={16} />
            <span>QUICK BUY</span>
          </button>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide ${
              product.badge === 'New' ? 'bg-green-400 text-black' :
              product.badge === 'Limited' ? 'bg-red-500 text-white' :
              'bg-yellow-400 text-black'
            }`}>
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm text-gray-400">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
          </div>
          
          <button onClick={()=>handleBuy(product)} className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold text-sm rounded-full hover:from-red-400 hover:to-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;