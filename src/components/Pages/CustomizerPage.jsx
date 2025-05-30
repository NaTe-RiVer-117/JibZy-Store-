import React from 'react';
import { useSnapshot } from 'valtio';
import { Trash2, RotateCcw, Palette, Shirt } from 'lucide-react';
import state from '../../store/state';
import TshirtCanvas from '../3D/TshirtCanvas';
import CustomizerControls from '../UI/CustomizerControls';

const CustomizerPage = () => {
  const snap = useSnapshot(state);

  // Reset function
  const handleReset = () => {
    state.color = '#FFFFFF';
    state.isCustomPrint = false;
    state.customPrintDecal = './l.png';
    state.customPrintPlacement = 'chest-center';
    state.customPrintSize = 0.15;
  };

  // Remove design function
  const handleRemoveDesign = () => {
    state.isCustomPrint = false;
    state.customPrintDecal = './l.png';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-gradient-to-r from-violet-500 to-violet-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Palette className="w-4 h-4 mr-2" />
            3D Design Studio
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
            Create Your Perfect Design
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Use our 3D customizer to bring your vision to life
          </p>
        </div>

        {/* Main Layout - FIXED: Canvas first on mobile, Controls second */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Canvas Area - FIRST on mobile (order-1), LEFT on desktop */}
          <div className="lg:col-span-3 order-1">
            <div className="bg-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden">
              
              {/* Canvas Header */}
              <div className="px-4 md:px-6 py-3 border-b border-gray-700 bg-gray-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shirt className="w-5 h-5 text-violet-500" />
                    <h3 className="text-white font-semibold text-sm md:text-base">3D Preview</h3>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ${
                      snap.isCustomPrint 
                        ? 'bg-gradient-to-r from-violet-500 to-violet-700 text-white' 
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {snap.isCustomPrint ? 'Custom Design' : 'Plain T-Shirt'}
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="flex items-center space-x-1">
                      {snap.isCustomPrint && (
                        <button
                          onClick={handleRemoveDesign}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors flex items-center space-x-1"
                          title="Remove Design"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={handleReset}
                        className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors flex items-center space-x-1"
                        title="Reset Everything"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Canvas - Fixed Aspect Ratio */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0">
                  <TshirtCanvas />
                </div>
              </div>
              
              
            </div>
          </div>

          {/* Controls Sidebar - SECOND on mobile (order-2), RIGHT on desktop */}
          <div className="lg:col-span-2 order-2">
            <div className="bg-gray-900 rounded-xl shadow-xl border border-gray-700">
              <CustomizerControls />
            </div>
          </div>
        </div>

      

       
      </div>
    </div>
  );
};

export default CustomizerPage;