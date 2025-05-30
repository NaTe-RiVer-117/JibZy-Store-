// ColorTab.jsx
import React, { useState } from 'react';
import { useSnapshot } from 'valtio';
import state from '../../store/state';

const ColorTab = () => {
  const snap = useSnapshot(state);
  const [customHex, setCustomHex] = useState(snap.color);

  const colors = [
 
  { hex: '#FFFFFF', name: 'White' },   
  { hex: '#2563EB', name: 'Blue' },     // Cool tone
  { hex: '#EAB308', name: 'Yellow' },   // Warm pop
  { hex: '#9333EA', name: 'Purple' },   // Rich contrast
  { hex: '#059669', name: 'Green' },    // Natural tone
  { hex: '#000000', name: 'Black' },    
  
  { hex: '#6B7280', name: 'Gray' },     // Neutral start
  { hex: '#EC4899', name: 'Pink' },     // Vibrant
  { hex: '#0D9488', name: 'Teal' },     // Cool balance
  { hex: '#EA580C', name: 'Orange' },   // Warm pop
  { hex: '#4F46E5', name: 'Indigo' },   // Deep contrast
  { hex: '#DC2626', name: 'Red' }       // Bold ending

  ];

  const handleColorSelect = (color) => {
    state.color = color;
    setCustomHex(color);
  };

  const handleHexInput = (e) => {
    const value = e.target.value;
    setCustomHex(value);
    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
      state.color = value;
    }
  };

  return (
    <div className="space-y-6 p-5 rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-inner border border-gray-700 text-white">
      <h2 className="text-lg font-semibold">T-Shirt Color</h2>

      {/* Current Color & Hex Input */}
      <div className="flex items-center gap-4">
        <div 
          className="w-14 h-14 rounded-lg border border-gray-600 shadow-inner"
          style={{ backgroundColor: snap.color }}
        />
        <input
          type="text"
          value={customHex}
          onChange={handleHexInput}
          placeholder="#FFFFFF"
          className="flex-1 px-4 py-2 border border-gray-600 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-gray-900 text-white"
        />
      </div>

      {/* Preset Palette */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Preset Colors</label>
        <div className="grid grid-cols-6 gap-3">
          {colors.map((color) => (
            <button
              key={color.hex}
              onClick={() => handleColorSelect(color.hex)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-transform duration-200 hover:scale-110 ${
                snap.color === color.hex
                  ? 'border-violet-500 ring-2 ring-violet-400'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            >
              {snap.color === color.hex && (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Color Picker */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Custom Picker</label>
        <input
          type="color"
          value={snap.color}
          onChange={(e) => handleColorSelect(e.target.value)}
          className="w-full h-12 rounded-lg border border-gray-600 cursor-pointer bg-gray-900"
        />
      </div>
    </div>
  );
};

export default ColorTab;