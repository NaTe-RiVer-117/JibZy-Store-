import React, { useState, useEffect } from "react";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalities = [
    {
      id: 0,
      type: "ANIME LOVER",
      traits: ["Otaku", "Colorful", "Expressive"],
      image: "./itachi.webp",
      themeColor: "from-black via-gray-900 to-violet-900",
      hoverTextColor: "group-hover:text-violet-500",
      mobileColor: "bg-gradient-to-r from-gray-900 to-violet-900",
      textColor: "text-violet-100",
      glowColor: "indigo", 
    },
    {
      id: 1,
      type: "FANDOM",
      traits: ["Heroic", "Bold", "Powerful"],
      image: "./hero.webp",
      themeColor: "from-black via-gray-900 to-gray-800",
      hoverTextColor: "group-hover:text-red-500",
      mobileColor: "bg-gradient-to-r from-gray-900 to-indigo-900",
      textColor: "text-indigo-100",
      glowColor: "red", 
    },
    {
      id: 2,
      type: "ABSTRACT LOVER",
      traits: ["Artistic", "Unique", "Creative"],
      image: "./abs.webp",
      themeColor: "from-black via-gray-900 to-purple-900",
      hoverTextColor: "group-hover:text-green-500",
      mobileColor: "bg-gradient-to-r from-gray-900 to-purple-900",
      textColor: "text-purple-100",
      glowColor: "green", 
    },
    {
      id: 3,
      type: "ADVENTURER",
      traits: ["Nature", "Active", "Free"],
      image: "./adv2.webp",
      themeColor: "from-black via-gray-900 to-gray-800",
      hoverTextColor: "group-hover:text-orange-500",
      mobileColor: "bg-gradient-to-r from-gray-900 to-gray-800",
      textColor: "text-gray-100",
      glowColor: "orange", 
    },
    {
      id: 4,
      type: "TECHIE",
      traits: ["Smart", "Digital", "Future"],
      image: "./techy.webp",
      themeColor: "from-black via-gray-900 to-violet-800",
      hoverTextColor: "group-hover:text-cyan-600",
      mobileColor: "bg-gradient-to-r from-gray-900 to-violet-800",
      textColor: "text-blue-200",
      glowColor: "cyan", 
    },
  ];
  return (
    <section className="min-h-screen bg-black text-white">
      {/* Mobile Layout  */}
      <div className="lg:hidden">
        {/* Hero Content */}
        <div
          className={`px-4 py-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-violet-500 to-violet-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            Your Personality, Your Design
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
           Don't Just Wear Fashion.
            <span className="block bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent">
              BE Fashion.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Create fashion that never existed before.
          </p>

          {/* Button */}
           <button
              onClick={() => setCurrentPage("customize")}
              className="group ml-10 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg  hover:shadow-[0_0_0.8em_#9333EA] hover:scale-[1.02] transition-all duration-300 flex items-center w-fit border border-gray-700 hover:border-violet-400"
            >
              Create Your Story
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform text-violet-300" />
            </button>

          <p className="text-gray-400 text-sm mb-8">
            Tap personalities below to explore styles
          </p>
        </div>

        {/* Mobile Personality Cards */}
        <div className="px-4 pb-8">
          <div className="grid grid-cols-1 gap-4">
            {personalities.map((personality, index) => (
              <div
                key={personality.id}
                onClick={() => setCurrentPage("customize")}
                className={`group relative overflow-hidden rounded-xl h-24 cursor-pointer transition-all duration-500 hover:shadow-2xl active:scale-95 hover:shadow-${personality.glowColor}-500/50`}
                style={{
                  backgroundImage: `url(${personality.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div
                  className={`absolute inset-0 ${personality.mobileColor} opacity-80 group-hover:opacity-60 transition-all duration-500`}
                ></div>

                {/* Content */}
                <div className="relative h-full flex items-center justify-between px-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {personality.type}
                    </h3>
                    <div className="flex space-x-2">
                      {personality.traits.map((trait, traitIndex) => (
                        <span
                          key={traitIndex}
                          className="text-xs text-white/80"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        {/* Desktop Personality Strips */}
        <div className="w-3/5 flex h-full">
          {personalities.map((personality, index) => (
            <div
              key={personality.id}
              onClick={() => setCurrentPage("customize")}
              className="group relative flex-1 cursor-pointer transition-all duration-500 hover:flex-[2] overflow-hidden"
              style={{
                backgroundImage: `url(${personality.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-20 transition-all duration-500"></div>

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${personality.themeColor} opacity-60 group-hover:opacity-0 transition-all duration-500`}
              ></div>
              
              {/* Glow Effect Overlay  */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none`}
                style={{
                  boxShadow: `inset 0 0 30px 5px ${personality.glowColor}`,
                  zIndex: 5
                }}
              ></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 z-10">
                {/* Personality Type  */}
                <div className="mb-4">
                  <h3
                    className={`text-sm group-hover:text-xl font-bold tracking-wider transform -rotate-90 origin-bottom-left whitespace-nowrap transition-all duration-500 text-white ${personality.hoverTextColor} mb-8 group-hover:mb-4`}
                  >
                    {personality.type}
                  </h3>
                </div>

                {/* Traits  */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  {personality.traits.map((trait, traitIndex) => (
                    <div
                      key={traitIndex}
                      className="inline-block bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-md text-sm font-semibold mr-2 mb-2"
                    >
                      {trait}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Main Content */}
        <div
          className={`w-2/5 flex flex-col justify-center px-8 xl:px-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-violet-500 to-violet-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 w-fit">
            <Star className="w-4 h-4 mr-2" />
            Your Personality, Your Design
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
           Don't Just<br></br> Wear Fashion.
            <span className=" block bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent">
              BE Fashion.
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
          Create fashion that never existed before.
          </p>

          {/* Stats */}
          <div className="flex items-center space-x-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-violet-500">25K+</div>
              <div className="text-gray-400 text-sm">Happy Creators</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-600">∞</div>
              <div className="text-gray-400 text-sm">Possibilities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-500">3D</div>
              <div className="text-gray-400 text-sm">Live Preview</div>
            </div>
          </div>

          {/* Button */}
          <div className="space-y-4">
            <button
              onClick={() => setCurrentPage("customize")}
              className="group bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg  hover:shadow-[0_0_1em_#9333EA] hover:scale-[1.02] transition-all duration-300 flex items-center w-fit border border-gray-700 hover:border-violet-400"
            >
              Create Your Story
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform text-violet-300" />
            </button>

            <p className="text-gray-400 text-sm">
              ← Hover over personalities to explore your style
            </p>
          </div>
        </div>
      </div>

  
      
      {/* CSS for glow effects */}
      <style jsx>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        .glow-effect {
          animation: glow-pulse 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;