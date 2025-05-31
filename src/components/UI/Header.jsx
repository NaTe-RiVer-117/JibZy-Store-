import React, { useState } from 'react';
import { FaPalette } from 'react-icons/fa';
const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'customize', label: 'Customize' }
  ];

  const collections = [
    { id: 'marvel', label: 'Marvel Heroes' },
    { id: 'dc', label: 'DC Universe' },
    { id: 'anime', label: 'Anime Collection' },
    { id: 'user-designs', label: 'Community Designs' }
  ];

  const handleNavigation = (pageId) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    setIsCollectionsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsCollectionsOpen(false);
  };

  return (
    <>
      <header className="bg-black border-b border-gray-800 sticky top-0 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavigation('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700 group-hover:shadow-[0_0_0.8em_#9333EA] rounded-lg flex items-center justify-center  hover:scale-105 transition-all duration-200">
               <img src='./l.png' className='w-6 h-6 '></img>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-violet-600 group-hover:bg-clip-text transition-all duration-200">
                  JibZyStore
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Design Your Story</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`font-medium transition-all duration-200 hover:text-violet-400 relative ${
                    currentPage === item.id
                      ? 'text-violet-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-violet-700 rounded-full"></div>
                  )}
                </button>
              ))}

              {/* Collections Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                  onMouseEnter={() => setIsCollectionsOpen(true)}
                  className="flex items-center font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Collections
                  <span className={`ml-1 text-sm transition-transform duration-200 ${isCollectionsOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {/* Dropdown Menu */}
                {isCollectionsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl py-2 z-50"
                    onMouseLeave={() => setIsCollectionsOpen(false)}
                  >
                    {collections.map((collection) => (
                      <button
                        key={collection.id}
                        onClick={() => handleNavigation(collection.id)}
                        className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-800 transition-colors duration-150 ${
                          currentPage === collection.id ? 'bg-gray-800 text-violet-400' : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        <span className="font-medium">{collection.label}</span>
                        {currentPage === collection.id && (
                          <div className="ml-auto w-2 h-2 bg-violet-500 rounded-full"></div>
                        )}
                      </button>
                    ))}
                    <div className="border-t border-gray-700 mt-2 pt-2">
                      <button
                        onClick={() => handleNavigation('customize')}
                        className="w-full flex items-center px-4 py-2 text-left text-gradient bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent hover:from-violet-400 hover:to-violet-600 transition-all duration-150 font-semibold"
                      >
                        Create Custom Design
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <button
                onClick={() => handleNavigation('customize')}
                className=" bg-black text-violet-500 hover:bg-gradient-to-r from-violet-500 to-violet-700 flex items-center gap-2 hover:text-white px-6 py-2 rounded-lg font-semibold hover:shadow-[0_0_1em_#9333EA] hover:scale-105 transition-all duration-200"
              >
                <FaPalette className="text-md" />
                Start Designing
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1 hover:bg-gray-800 rounded-lg transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-gray-900 border-b border-gray-700 shadow-2xl z-50 md:hidden">
            <div className="container mx-auto px-4 py-6">
              
              {/* Main Navigation */}
              <div className="space-y-1 mb-6">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-lg text-left font-medium transition-colors duration-200 ${
                      currentPage === item.id
                        ? 'bg-gray-800 text-violet-400'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {currentPage === item.id && (
                      <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Collections Section */}
              <div className="border-t border-gray-700 pt-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3 px-4">
                  Collections
                </h3>
                <div className="space-y-1">
                  {collections.map((collection) => (
                    <button
                      key={collection.id}
                      onClick={() => handleNavigation(collection.id)}
                      className={`w-full flex items-center justify-between py-3 px-4 rounded-lg text-left transition-colors duration-200 ${
                        currentPage === collection.id
                          ? 'bg-gray-800 text-violet-400 font-medium'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      {collection.label}
                      {currentPage === collection.id && (
                        <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="border-t border-gray-700 pt-4">
                <button
                  onClick={() => handleNavigation('customize')}
                  className="w-full bg-gradient-to-r from-violet-500 to-violet-700 text-white py-4 px-4 rounded-lg font-bold hover:shadow-[0_0_0.8em_#9333EA] transition-all duration-200 flex items-center justify-center"
                >
                  <FaPalette className="text-xl" />
                  Start Designing Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;