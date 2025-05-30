import React, { useState } from 'react';
import { useSnapshot } from 'valtio';
import { FaPalette, FaImage, FaMousePointer, FaDownload, FaBolt, FaStar, FaCrown, FaShoppingCart, FaEye } from 'react-icons/fa';
import state from '../../store/state'; 
import ColorTab from '../tabs/ColorTab';
import ImageTab from '../tabs/ImageTab';
import ViewTab from '../tabs/ViewTab';
import { downloadCanvasToImage } from '../../utils/helpers';

const CustomizerControls = () => {
  const snap = useSnapshot(state);
  const [activeTab, setActiveTab] = useState('color');

  const tabs = [
    { id: 'color', label: 'Color', icon: FaPalette },
    { id: 'image', label: 'Design', icon: FaImage },
    { id: 'position', label: 'Position', icon: FaMousePointer },
    
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl border border-gray-700 h-full max-h-[600px] lg:max-h-[700px] flex flex-col overflow-hidden">
      
      {/* Header  */}
      <div className="bg-gradient-to-r from-violet-500 to-violet-700 p-6 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-violet-800/20 to-violet-600/20"></div>
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <FaBolt className="text-violet-200 text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Design Studio
                </h3>
                <p className="text-white/90 text-sm font-medium">Create your perfect custom <span className='font-bold text-violet-200'>LibZyTee</span></p>
              </div>
            </div>
            
         
          </div>
        </div>
      </div>

      {/* Tab Navigation  */}
      <div className="flex border-b border-gray-700 bg-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-4 px-3 text-sm font-semibold text-center transition-all duration-300 relative ${
              activeTab === tab.id
                ? 'text-violet-400'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
            }`}
          >
            <tab.icon className="text-lg" />
            <span className="hidden sm:inline">{tab.label}</span>
            
            {/* Active Tab Indicator */}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-violet-700"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content - Dark Background */}
      <div className="flex-1 overflow-y-auto bg-gray-900 text-white">
        
        {/* Color Section */}
        {activeTab === 'color' && (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-violet-700 rounded-xl flex items-center justify-center shadow-lg">
                  <FaPalette className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-bold text-white">T-Shirt Color</h4>
                  <p className="text-xs text-gray-400">Choose your base color</p>
                </div>
              </div>
             
            </div>
            <ColorTab />
          </div>
        )}

        {/* Image Section */}
        {activeTab === 'image' && (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-violet-700 rounded-xl flex items-center justify-center shadow-lg">
                  <FaImage className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Design Upload</h4>
                  <p className="text-xs text-gray-400">Add your custom design</p>
                </div>
              </div>
            </div>
            <ImageTab />
          </div>
        )}

        {/* Position Section */}
        {activeTab === 'position' && (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-violet-700 rounded-xl flex items-center justify-center shadow-lg">
                  <FaMousePointer className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Position & Size</h4>
                  <p className="text-xs text-gray-400">Perfect your placement</p>
                </div>
              </div>
            </div>
            <ViewTab />
          </div>
        )}

        {/* View Section */}
        
      </div>

      {/* Enhanced Footer Actions  */}
      <div className="border-t border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button
            onClick={() => downloadCanvasToImage()}
            className="flex-1  bg-violet-600 hover:bg-violet-700  text-white py-4 px-6 rounded-xl font-bold transition-all transform hover:scale-[1.02]  flex items-center justify-center space-x-3 shadow-lg border hover:shadow-violet-500  border-violet-500/30"
          >
            <FaDownload className="text-lg" />
            <span className="text-base">Save My Design</span>
          </button>

          <button
            onClick={() => alert("Added to cart!")}
            className="flex-1  bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 hover:from-gray-600 hover:via-gray-500 hover:to-gray-700 text-white py-4 px-6 rounded-xl font-bold transition-all transform hover:scale-[1.02]  hover:shadow-gray-500  flex items-center justify-center space-x-3 shadow-lg border border-gray-600"
          >
            <FaShoppingCart className="text-lg" />
            <span className="text-base">Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default CustomizerControls;