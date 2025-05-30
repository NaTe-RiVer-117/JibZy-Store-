import React, { useState, useEffect } from 'react';
import Footer from './components/UI/Footer';
import Homepage from './components/Pages/Homepage';
import BrandStory from './components/Pages/BrandStory';
import Customizer from './components/Pages/CustomizerPage';
import ThemeCollection from './components/Pages/ThemeCollection';
import Header from './components/UI/Header';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    });
  }, [currentPage]);
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage setCurrentPage={setCurrentPage} />;
      case 'story':
        return <BrandStory setCurrentPage={setCurrentPage} />; 
      case 'customize':
        return <Customizer setCurrentPage={setCurrentPage} />; 
      case 'marvel':
        return <ThemeCollection theme="marvel" setCurrentPage={setCurrentPage} />;
      case 'dc':
        return <ThemeCollection theme="dc" setCurrentPage={setCurrentPage} />; 
      case 'anime':
        return <ThemeCollection theme="anime" setCurrentPage={setCurrentPage} />; 
      case 'user-designs':
        return <ThemeCollection theme="user-designs" setCurrentPage={setCurrentPage} />;
      case 'new-arrivals':
        return <ThemeCollection theme="new-arrivals" setCurrentPage={setCurrentPage} />;
      case 'graphic':
        return <ThemeCollection theme="graphic" setCurrentPage={setCurrentPage} />;
      case 'classic':
        return <ThemeCollection theme="classic" setCurrentPage={setCurrentPage} />;
      default:
        return <Homepage setCurrentPage={setCurrentPage} />;
    }
  };
  
  return (
    <div className="App min-h-screen bg-gray-50 flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;