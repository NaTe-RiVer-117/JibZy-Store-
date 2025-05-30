import React, { useState } from 'react';
import { useSnapshot } from 'valtio';
import state from '../../store/state';
import { FaLock, FaCheckCircle, FaCrown, FaStar } from 'react-icons/fa';

const PremiumPopup = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-gray-700 text-white">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <FaCrown className="text-white text-2xl" />
        </div>

        <h3 className="text-xl font-bold mb-2">Upgrade to  Premium </h3>
        

        <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700 text-left space-y-3">
          {[
            'All premium placements',
            'Advanced sizing controls',
            'Priority support',
            'Free LibZyTee worth ₹799 ',
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <FaStar className="text-violet-400 text-sm" />
              <span className="text-sm text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-violet-500/10 to-violet-700/10 border border-violet-500/30 rounded-xl p-4 mb-6">
          <div className="text-3xl font-bold text-white mb-1">₹899</div>
          <div className="text-sm text-gray-400">One-time purchase • Lifetime access</div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => {
              alert('Payment integration coming soon!');
              onClose?.();
            }}
            className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Upgrade to Premium
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-300 py-3 rounded-xl font-medium transition"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ViewTab = () => {
  const snap = useSnapshot(state);
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);

  const handlePlacementSelect = (placementId) => {
    const placement = snap.placements[placementId];
    if (placement.premium && !snap.isPremium) {
      setShowPremiumPopup(true);
    } else {
      state.customPrintPlacement = placementId;
      state.isCustomPrint = true;
    }
  };

  return (
    <div className="space-y-6 text-white">
      <div className="grid grid-cols-2 gap-3">
        {Object.entries(snap.placements).map(([placementId, placement]) => {
          const isFree = !placement.premium;
          const isActive = snap.customPrintPlacement === placementId;
          const canUse = isFree || snap.isPremium;

          return (
            <button
              key={placementId}
              onClick={() => handlePlacementSelect(placementId)}
              className={`relative p-4 rounded-xl text-left transition-all text-sm h-[70px]
                ${
                  isActive && canUse
                    ? 'bg-gradient-to-br from-violet-600 to-violet-700 border border-violet-500 text-white shadow-lg'
                    : canUse
                    ? 'border border-gray-600 bg-gray-800 text-white hover:border-violet-400 hover:bg-gray-700'
                    : 'border-dashed border-gray-600 bg-gray-800 text-gray-500 opacity-70 cursor-not-allowed'
                }
              `}
            >
              {!canUse && (
                <div className="absolute top-2 right-2 text-gray-500">
                  <FaLock size={14} />
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <span className={`${!canUse ? 'opacity-50' : ''} text-lg`}>
                  {placement.icon}
                </span>
                {isActive && canUse && (
                  <FaCheckCircle className="text-white" size={16} />
                )}
              </div>

              <div className={`font-semibold text-xs mb-1 ${
                !canUse ? 'text-gray-500' : isActive ? 'text-white' : 'text-white'
              }`}>
                {placement.name}
              </div>

              <div className={`text-xs ${
                !canUse ? 'text-gray-500' : 'text-gray-400'
              }`}>
                {placement.description}
              </div>

              {!canUse && (
                <div className="text-xs text-violet-400 font-medium mt-1">
                  Premium
                </div>
              )}
            </button>
          );
        })}
      </div>

      {showPremiumPopup && <PremiumPopup onClose={() => setShowPremiumPopup(false)} />}
    </div>
  );
};

export default ViewTab;