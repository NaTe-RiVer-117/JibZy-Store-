import React, { useState } from 'react';
import { Heart, Eye, ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ 
  product,
  onQuickView = () => {},
  onAddToCart = () => {},
  onToggleWishlist = () => {},
  className = "",
  showQuickActions = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const {
    id,
    name,
    price,
    originalPrice,
    image,
    rating = 0,
    reviewCount = 0,
    isNew = false,
    isBestseller = false,
    designer = null
  } = product;

  const hasDiscount = originalPrice && originalPrice > price;
  const discountPercent = hasDiscount ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    onToggleWishlist(product);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView(product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={12}
        className={`${
          index < Math.floor(rating) 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div 
      className={`group relative bg-gray-900 rounded-lg border border-gray-800 hover:border-violet-500 transition-all duration-300 overflow-hidden hover:shadow-xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-800">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
        )}
        
        {/* Product Image */}
        <img
          src={imageError ? '/placeholder-tshirt.jpg' : image}
          alt={name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 z-10 ${
            isWishlisted 
              ? 'bg-violet-600 text-white shadow-lg' 
              : 'bg-gray-800/90 text-gray-300 hover:bg-gray-700 shadow-sm'
          } hover:scale-110 ${showQuickActions ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
        >
          <Heart 
            size={16} 
            className={isWishlisted ? 'fill-current' : ''} 
          />
        </button>

        {/* Quick Actions Overlay - Desktop Only */}
        {showQuickActions && (
          <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          } hidden sm:block`}>
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <button
                onClick={handleQuickView}
                className="flex-1 bg-gray-800 text-gray-100 py-2 px-4 rounded-md font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm border border-gray-700"
              >
                <Eye size={16} />
                <span className="hidden lg:inline">Quick View</span>
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-violet-600 text-white py-2 px-4 rounded-md font-medium hover:bg-violet-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <ShoppingCart size={16} />
                <span className="hidden lg:inline">Add to Cart</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="p-4">
        {/* Designer Credit (for user designs) */}
        {designer && (
          <div className="text-xs text-violet-400 font-medium mb-1">
            by {designer}
          </div>
        )}

        {/* Product Name */}
        <h3 className="font-semibold text-gray-100 mb-2 line-clamp-2 group-hover:text-violet-400 transition-colors leading-tight">
          {name}
        </h3>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              {renderStars(rating)}
            </div>
            <span className="text-xs text-gray-500">
              ({reviewCount})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-white">
            ₹{price}
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Mobile Add to Cart Button */}
      <div className="block sm:hidden border-t border-gray-800 p-3">
        <button
          onClick={handleAddToCart}
          className="w-full bg-violet-600 text-white py-2 px-4 rounded-md font-medium hover:bg-violet-700 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

//  ProductGrid with Mobile-Optimized Layouts
export const ProductGrid = ({ 
  products = [], 
  columns = 4,
  showQuickActions = true,
  className = "",
  emptyMessage = "No products found"
}) => {
  if (!products.length) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
          <ShoppingCart className="w-8 h-8 text-gray-600" />
        </div>
        <p className="text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  //  grid system for mobile layouts
  const getGridCols = (cols) => {
    
    if (cols === 'mobile-2') {
      return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-2'; 
    }
    if (cols === 'mobile-4') {
      return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'; 
    }
    
  
    const gridCols = {
      2: 'grid-cols-2 sm:grid-cols-2',
      3: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3', 
      4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4', 
      5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
      6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'
    };
    return gridCols[cols] || gridCols[4];
  };

  return (
    <div className={`grid ${getGridCols(columns)} gap-4 sm:gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          product={product}
          showQuickActions={showQuickActions}
        />
      ))}
    </div>
  );
};

//  ProductSection
export const ProductSection = ({ 
  title, 
  subtitle = "", 
  products = [], 
  viewAllLink = "",
  onViewAll = () => {},
  columns = 4,
  className = ""
}) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
          {(viewAllLink || onViewAll) && (
            <button 
              onClick={onViewAll}
              className="hidden md:flex items-center text-violet-400 font-semibold hover:text-violet-300 transition-colors group"
            >
              View All
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
        
        {/* Products Grid */}
        <ProductGrid 
          products={products}
          columns={columns}
        />
        
        {/* Mobile View All Button */}
        {(viewAllLink || onViewAll) && (
          <div className="text-center mt-8 md:hidden">
            <button 
              onClick={onViewAll}
              className="bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors"
            >
              View All {title}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCard;