// store/state.js - Fixed with premium logic
import { proxy } from 'valtio';

const state = proxy({
  //  intro state
  intro: true,
  
  activeTab: 'color',
  
  // T-shirt color default
  color: '#4B5563', 
  
  // User premium status
  isPremium: false,
  
  // Custom Print
  isCustomPrint: true,
  customPrintDecal: './l.png',
  
  // Custom Print Default value 
  customPrintPlacement: 'chest-center', 
  customPrintSize: 0.15, 
  
  
  placements: {
    //  FREE 
    'chest-center': {
      name: 'Chest Center',

      position: [0, 0.05, 0.15],
      scale: 0.15,
      icon: '',
      premium: false  
    },
    'chest-right': {
      name: 'Chest Right',

      position: [-0.05, 0.07, 0.15],
      scale: 0.07,
      icon: '',
      premium: false  
    },
    'bottom-center': {
      name: 'Bottom Center',
      
      position: [0, -0.2, 0.15],
      scale: 0.2,
      icon: '',
      premium: false 
    },
    
    // PREMIUM 
    'chest-left': {
      name: 'Chest Left', 
     
      position: [-0.15, 0.25, 0.15],
      scale: 0.12,
      icon: '',
      premium: true   
    },
    'full-front': {
      name: 'Full Front',
  
      position: [0, 0.05, 0.15],
      scale: 0.4,
      icon: '',
      premium: true   
    },
    'back-center': {
      name: 'Back Center',
    
      position: [0, 0.05, -0.15],  
      scale: 0.4,
      icon: '',
      premium: true  
    },
    'left-sleeve': {
      name: 'Left Sleeve',
   
      position: [-0.35, 0.1, 0.12],
      scale: 0.1,
      icon: '',
      premium: true   
    },
    'right-sleeve': {
      name: 'Right Sleeve', 
      
      position: [0.35, 0.1, 0.12],
      scale: 0.1,
      icon: '',
      premium: true   
    }
  }
});

export default state;