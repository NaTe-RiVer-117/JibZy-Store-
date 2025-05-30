import React, { useState, useRef, useCallback } from 'react';
import { useSnapshot } from 'valtio';
import state from '../../store/state';

const ImageTab = () => {
  const snap = useSnapshot(state);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const hasCustomDesign = snap.customPrintDecal && snap.customPrintDecal !== './l.png';

  const handleFileUpload = useCallback(async (file) => {
    if (!file) return;
    const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setUploadError('Only JPG, PNG, SVG, or WebP files are allowed.');
      return;
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setUploadError('File size must be less than 5MB');
      return;
    }

    setIsUploading(true);
    setUploadError('');

    try {
      const imageUrl = URL.createObjectURL(file);
      state.customPrintDecal = imageUrl;
      state.isCustomPrint = true;
      await new Promise((resolve) => setTimeout(resolve, 400));
    } catch {
      setUploadError('Failed to process image');
    } finally {
      setIsUploading(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  }, [handleFileUpload]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false);
  }, []);

  const handleFileInput = useCallback((e) => {
    const file = e.target.files[0];
    if (file) handleFileUpload(file);
  }, [handleFileUpload]);

  const handleRemoveDesign = () => {
    state.customPrintDecal = './l.png';
    state.isCustomPrint = false;
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-6 text-white">
      {!hasCustomDesign ? (
        <>
          {/* Upload Zone */}
          <div
            className={`rounded-xl p-6 text-center transition-all cursor-pointer relative overflow-hidden border-2 border-dashed ${
              isDragOver || isUploading
                ? 'border-violet-400 bg-gradient-to-br from-violet-500/10 to-violet-700/10'
                : 'border-gray-600 hover:border-gray-500 hover:bg-gray-800/40'
            }`}
            onClick={() => !isUploading && fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {isUploading ? (
              <div className="space-y-4">
                <div className="w-10 h-10 border-4 border-violet-300 border-t-violet-600 rounded-full animate-spin mx-auto" />
                <p className="text-violet-300 font-semibold">Processing your design...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-violet-500 to-violet-700 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold">Upload Your Design</p>
                  <p className="text-sm text-gray-400 mb-2">Drag & drop or click to browse files</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Formats: JPG, PNG, SVG</li>
                    <li>• Max Size: 5MB</li>
                    <li>• Tip: Use square images with high resolution</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />

          {uploadError && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 text-sm text-red-300 rounded-lg">
              {uploadError}
            </div>
          )}
        </>
      ) : (
        <>
          {/* Design Success */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center space-x-4">
            <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-green-300">Design Applied</p>
              <p className="text-green-200 text-sm">Ready to position and customize</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition font-medium"
            >
              Replace Design
            </button>
            <button
              onClick={handleRemoveDesign}
              className="w-full px-4 py-3 bg-gradient-to-r from-red-600/20 to-red-600/20 text-red-300 border border-red-500/30 rounded-lg hover:from-red-600/30 hover:to-red-600/30 transition"
            >
              Remove Design
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />
        </>
      )}
    </div>
  );
};

export default ImageTab;