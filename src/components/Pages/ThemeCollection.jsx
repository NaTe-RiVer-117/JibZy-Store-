import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard, { ProductGrid } from '../UI/ProductCard';
import { productCategories, getProductsByCategory, getAllProducts } from '../../data/productData';
import { FaPalette } from 'react-icons/fa';

const ThemeCollection = ({ theme = 'marvel', setCurrentPage }) => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

 
  const getThemeClasses = (themeId) => {
    const themes = {
      'marvel': {
        primary: 'bg-red-600 hover:bg-red-700',
        accent: 'text-red-500',
        background: 'bg-red-800',
        border: 'border-red-200',
        text: 'text-red-900',
        gradient: 'bg-gradient-to-r from-red-500 to-red-700',
        heroGradient: 'bg-gradient-to-r from-red-600/90 to-red-900/70',
        searchFocus: 'focus:ring-red-500 focus:border-red-500',
        icon: 'text-red-500'
      },
      'dc': {
        primary: 'bg-blue-600 hover:bg-blue-700',
        accent: 'text-blue-500',
        background: 'bg-blue-800',
        border: 'border-blue-200',
        text: 'text-blue-900',
        gradient: 'bg-gradient-to-r from-blue-500 to-blue-700',
        heroGradient: 'bg-gradient-to-r from-blue-700/90 to-blue-900/90',
        searchFocus: 'focus:ring-blue-500 focus:border-blue-500',
        icon: 'text-blue-500'
      },
      'anime': {
        primary: 'bg-purple-600 hover:bg-purple-700',
        accent: 'text-purple-500',
        background: 'bg-purple-800',
        border: 'border-purple-200',
        text: 'text-purple-900',
        gradient: 'bg-gradient-to-r from-purple-500 to-purple-700',
        heroGradient: 'bg-gradient-to-r from-purple-800/90 to-purple-900/90',
        searchFocus: 'focus:ring-purple-500 focus:border-purple-500',
        icon: 'text-purple-500'
      },
      'user-designs': {
        primary: 'bg-violet-600 hover:bg-violet-700',
        accent: 'text-violet-500',
        background: 'bg-violet-800',
        border: 'border-violet-200',
        text: 'text-violet-900',
        gradient: 'bg-gradient-to-r from-violet-500 to-violet-700',
        heroGradient: 'bg-gradient-to-r from-violet-700/90 to-violet-900/90',
        searchFocus: 'focus:ring-violet-500 focus:border-violet-500',
        icon: 'text-violet-500'
      },
      'new-arrivals': {
        primary: 'bg-violet-600 hover:bg-violet-700',
        accent: 'text-violet-500',
        background: 'bg-violet-800',
        border: 'border-violet-200',
        text: 'text-violet-900',
        gradient: 'bg-gradient-to-r from-violet-500 to-violet-700',
        heroGradient: 'bg-gradient-to-r from-violet-500/90 to-violet-700/90',
        searchFocus: 'focus:ring-violet-500 focus:border-violet-500',
        icon: 'text-violet-500'
      },
      'graphic': {
        primary: 'bg-yellow-600 hover:bg-yellow-700',
        accent: 'text-yellow-600',
        background: 'bg-yellow-800',
        border: 'border-yellow-200',
        text: 'text-yellow-900',
        gradient: 'bg-gradient-to-r from-yellow-500 to-yellow-700',
        heroGradient: 'bg-gradient-to-r from-yellow-500/90 to-yellow-700/90',
        searchFocus: 'focus:ring-yellow-500 focus:border-yellow-500',
        icon: 'text-yellow-600'
      },
      'classic': {
        primary: 'bg-gray-600 hover:bg-gray-700',
        accent: 'text-gray-500',
        background: 'bg-gray-800',
        border: 'border-gray-200',
        text: 'text-gray-900',
        gradient: 'bg-gradient-to-r from-gray-500 to-gray-700',
        heroGradient: 'bg-gradient-to-r from-gray-500/90 to-gray-700/90',
        searchFocus: 'focus:ring-gray-500 focus:border-gray-500',
        icon: 'text-gray-500'
      }
    };
    return themes[themeId] || themes.marvel;
  };

  //  collection data
  const getCollectionData = (themeId) => {
    const collections = {
      'marvel': {
        ...productCategories.marvel,
        hero: {
          title: 'Marvel Heroes Collection',
          subtitle: 'Unleash Your Inner Superhero',
          description: 'From Iron Man to Spider-Man, discover premium Marvel t-shirts with iconic designs that bring your favorite heroes to life.',
          bgImage: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200&h=400&fit=crop',
          textColor: 'text-white'
        }
      },
      'dc': {
        ...productCategories.dc,
        hero: {
          title: 'DC Universe Collection',
          subtitle: 'Justice Never Goes Out of Style',
          description: 'Batman, Superman, Wonder Woman and more. Premium DC Comics t-shirts featuring legendary heroes and iconic symbols.',
          bgImage: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200&h=400&fit=crop',
          textColor: 'text-white'
        }
      },
      'anime': {
        ...productCategories.anime,
        hero: {
          title: 'Anime Collection',
          subtitle: 'Express Your Otaku Spirit',
          description: 'Naruto, Dragon Ball, One Piece and more. Premium anime t-shirts celebrating Japanese culture and beloved characters.',
          bgImage: 'https://miro.medium.com/v2/resize:fit:1400/1*sqlIz6Kp_9CfhnhUn8xq5A.png',
          textColor: 'text-white'
        }
      },
      'user-designs': {
        ...productCategories.userDesigns,
        hero: {
          title: 'Community Designs',
          subtitle: 'Created by Our Amazing Community',
          description: 'Unique designs crafted by talented creators. Support independent artists while wearing one-of-a-kind t-shirts.',
          bgImage: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/303068212/original/f38dca7643db4ec6fde36765465ec9d65337ecec/create-masterpiece-anime-art-using-ai.png',
          textColor: 'text-white'
        }
      },
      'new-arrivals': {
        ...productCategories.newArrivals,
        hero: {
          title: 'New Arrivals',
          subtitle: 'Fresh Designs, Hot Off The Press',
          description: 'Be the first to wear our latest designs. New arrivals featuring trending themes and cutting-edge graphics.',
          bgImage: '',
          textColor: 'text-white'
        }
      },
      'graphic': {
        name: 'Graphic Tees',
        description: 'Bold statements and creative designs',
        products: getAllProducts().filter(p => p.tags?.includes('graphic') || p.category === 'user-designs'),
        hero: {
          title: 'Graphic Tees Collection',
          subtitle: 'Make a Bold Statement',
          description: 'Express yourself with striking graphics, creative artwork, and bold designs that turn heads and start conversations.',
          bgImage: '',
          textColor: 'text-white'
        }
      },
      'classic': {
        name: 'Classic Essentials',
        description: 'Timeless designs for every wardrobe',
        products: getAllProducts().filter(p => p.tags?.includes('classic') || p.name.toLowerCase().includes('classic')),
        hero: {
          title: 'Classic Essentials',
          subtitle: 'Timeless Style, Premium Quality',
          description: 'Wardrobe essentials that never go out of style. Clean designs, premium materials, and classic fits for everyday wear.',
          bgImage: '',
          textColor: 'text-white'
        }
      }
    };
    
    return collections[themeId] || collections.marvel;
  };

  const currentCollection = getCollectionData(theme);
  const themeClasses = getThemeClasses(theme);
  const allProducts = currentCollection.products || [];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Price filter
    if (priceRange !== 'all') {
      filtered = filtered.filter(product => {
        const price = product.price;
        switch (priceRange) {
          case 'under-500': return price < 500;
          case '500-700': return price >= 500 && price <= 700;
          case '700-900': return price >= 700 && price <= 900;
          case 'over-900': return price > 900;
          default: return true;
        }
      });
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'name': return a.name.localeCompare(b.name);
        case 'rating': return (b.rating || 0) - (a.rating || 0);
        case 'newest': return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        case 'featured':
        default:
          // Featured: bestsellers first, then by rating
          if (a.isBestseller && !b.isBestseller) return -1;
          if (!a.isBestseller && b.isBestseller) return 1;
          return (b.rating || 0) - (a.rating || 0);
      }
    });

    return filtered;
  }, [allProducts, searchQuery, priceRange, sortBy]);

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'name', label: 'Name A-Z' }
  ];

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-500', label: 'Under ₹500' },
    { value: '500-700', label: '₹500 - ₹700' },
    { value: '700-900', label: '₹700 - ₹900' },
    { value: 'over-900', label: 'Over ₹900' }
  ];

  return (
    <div className={`theme-collection min-h-screen ${themeClasses.background}`}>
      
      {/* Themed Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${currentCollection.hero.bgImage})` }}
      >
        <div className={`absolute inset-0 ${themeClasses.heroGradient}`}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-6xl font-bold ${currentCollection.hero.textColor} mb-4`}>
              {currentCollection.hero.title}
            </h1>
            <p className={`text-xl md:text-2xl ${currentCollection.hero.textColor} opacity-90 mb-6`}>
              {currentCollection.hero.subtitle}
            </p>
            <p className={`text-lg ${currentCollection.hero.textColor} opacity-80 max-w-3xl mx-auto mb-8`}>
              {currentCollection.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className={`${currentCollection.hero.textColor} text-lg font-semibold`}>
                {allProducts.length} Products Available
              </div>
              <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                Free Shipping on Orders ₹999+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themed Filters and Search */}
      <section className={`sticky top-0 z-30 bg-white border-b ${themeClasses.border} shadow-sm`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Themed Search */}
            <div className="relative flex-1 max-w-md">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${themeClasses.icon} w-4 h-4`} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border ${themeClasses.border} rounded-lg ${themeClasses.searchFocus} focus:border-transparent`}
              />
            </div>

            {/* Themed Filter Controls */}
            <div className="flex items-center gap-4 flex-wrap">
              
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`appearance-none bg-white border ${themeClasses.border} rounded-lg px-4 py-2 pr-10 ${themeClasses.searchFocus} focus:border-transparent`}
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${themeClasses.accent} w-4 h-4 pointer-events-none`} />
              </div>

              {/* Price Filter */}
              <div className="relative">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className={`appearance-none bg-white border ${themeClasses.border} rounded-lg px-4 py-2 pr-10 ${themeClasses.searchFocus} focus:border-transparent`}
                >
                  {priceOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${themeClasses.accent} w-4 h-4 pointer-events-none`} />
              </div>

              {/* Themed View Mode Toggle */}
              <div className={`flex items-center border ${themeClasses.border} rounded-lg`}>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? `${themeClasses.primary} text-white` : themeClasses.accent}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? `${themeClasses.primary} text-white` : themeClasses.accent}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Results Count */}
              <div className={`text-sm ${themeClasses.text}`}>
                {filteredAndSortedProducts.length} of {allProducts.length} products
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredAndSortedProducts.length > 0 ? (
            <ProductGrid 
              products={filteredAndSortedProducts}
              columns={viewMode === 'grid' ? 4 : 2}
              showQuickActions={true}
              className={viewMode === 'list' ? 'gap-4' : 'gap-6'}
            />
          ) : (
            <div className="text-center py-16">
              <div className={`w-24 h-24 ${themeClasses.background} rounded-full mx-auto mb-6 flex items-center justify-center border-2 ${themeClasses.border}`}>
                <Search className={`w-8 h-8 ${themeClasses.accent}`} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">No products found</h3>
              <p className="text-neutral-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setPriceRange('all');
                  setSortBy('featured');
                }}
                className={`${themeClasses.primary} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Themed Bottom CTA Section */}
      <section className={`py-16 ${themeClasses.gradient}`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want Something Completely Unique?
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Use our 3D customizer to design your own one-of-a-kind t-shirt with unlimited creativity.
            </p>
           
            <button 
              onClick={() => setCurrentPage('customize')}
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-violet-600 hover:text-white transition-colors shadow-lg hover:shadow-xl"
            >
                <div className='flex items-center justify-center gap-2'>
                  <FaPalette className="text-violet-700 text-sm" />
                  Start Your Design Journey
                </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThemeCollection;