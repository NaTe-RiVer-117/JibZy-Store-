import React, { useState, useEffect } from "react";
import {
  FaPalette,
  FaArrowRight,
  FaUsers,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";

const BrandStory = ({ setCurrentPage = () => {} }) => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      const newVisible = {};

      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        newVisible[index] = isInView;
      });

      setIsVisible(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-60px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(60px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 4px 20px rgba(139, 92, 246, 0.2);
          }
          50% {
            box-shadow: 0 8px 40px rgba(139, 92, 246, 0.4);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .creative-card {
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .creative-card:hover {
          transform: translateY(-12px) scale(1.02);
        }

        .text-gradient {
          background: linear-gradient(
            135deg,
            #a855f7 0%,
            #d946ef 50%,
            #8b5cf6 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          padding-bottom: 32px;
          line-height: 1.2;
          margin-bottom: -16px;
        }

        .stats-counter {
          font-variant-numeric: tabular-nums;
        }
      `}</style>

      <div className="min-h-screen bg-black text-white">
        {/* HERO SECTION - DESIGN YOUR STORY */}
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="fade-in-up max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 leading-none tracking-tight">
                Design Your
                <span className="block text-gradient">Personality</span>
              </h1>

              <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                Design your own trends. Set your own rules.
                <span className="block text-violet-300 font-medium mt-2">
                  Every design is a statement only you can make.
                </span>
              </p>

              {/* Hero Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-400 stats-counter">
                    25K+
                  </div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">
                    Unique Creators
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-400 stats-counter">
                    100K+
                  </div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">
                    Personal Designs
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-400 stats-counter">
                    ∞
                  </div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">
                    Ways to Express
                  </div>
                </div>
              </div>

              {/* Hero CTA */}
              <div className="flex flex-col mb-3 sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setCurrentPage("customize")}
                  className="bg-gradient-to-r from-violet-600 to-violet-800 hover:shadow-[0_0_0.8em_#9333EA] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    <FaPalette className="text-xl" />
                    Start Creating Your Story
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: YOUR UNIQUENESS DESERVES EXPRESSION */}
        <section className="py-12 md:py-20 bg-gradient-to-b ">
          <div className="container mx-auto px-4">
            <div
              className={`animate-on-scroll max-w-7xl mx-auto ${
                isVisible[0] ? "slide-in-left" : "opacity-0"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Personal Expression Message */}
                <div className="space-y-6 md:space-y-8">
                  <div className="space-y-4 md:space-y-6">
                    <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">
                      Personal Expression
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      You're One of a Kind.
                      <span className="block text-violet-400">
                        Your Style Should Be Too.
                      </span>
                    </h2>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
                      Every person has unique <strong>ideas</strong>,{" "}
                      <strong>perspectives</strong>, and{" "}
                      <strong>creativity </strong>
                      waiting to be expressed.
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                      Your t-shirt is more than clothing - it's a canvas for
                      your personality, your thoughts, your artistic vision made
                      wearable.
                    </p>
                  </div>

                  {/* Expression Features */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center space-x-4 p-3 md:p-4 bg-violet-900/10 border border-violet-500/20 rounded-xl">
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-violet-400 rounded-full"></div>
                      <span className="text-gray-200 font-medium text-sm md:text-base">
                        Express your unique perspective
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 md:p-4 bg-violet-900/10 border border-violet-500/20 rounded-xl">
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-violet-400 rounded-full"></div>
                      <span className="text-gray-200 font-medium text-sm md:text-base">
                        Turn your ideas into wearable art
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 md:p-4 bg-violet-900/10 border border-violet-500/20 rounded-xl">
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-violet-400 rounded-full"></div>
                      <span className="text-gray-200 font-medium text-sm md:text-base">
                        Create something that truly reflects you
                      </span>
                    </div>
                  </div>
                </div>

                {/* Personal Expression Visual */}
                <div className="relative">
                  <div className="creative-card bg-gradient-to-br from-violet-900/30 to-purple-900/30 border border-violet-500/30 rounded-2xl p-6 md:p-8 min-h-[400px] md:min-h-[500px]">
                    <div className="space-y-6">
                      {/* Single Creative Expression Image */}
                      <div className="mb-6">
                        <img
                          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1727693068_4979125.jpg?format=webp&w=480&dpr=1.4"
                          alt="Custom designed t-shirt"
                          className="w-full h-80 md:h-96 object-cover rounded-xl mx-auto hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WE BRING YOUR VISION TO LIFE */}
        <section className="py-12 md:py-20 ">
          <div className="container mx-auto px-4">
            <div
              className={`animate-on-scroll max-w-7xl mx-auto ${
                isVisible[1] ? "slide-in-right" : "opacity-0"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Creative Platform Visual */}
                <div className="relative lg:order-1">
                  <div className="creative-card bg-gradient-to-br from-violet-900/30 to-purple-900/30 border border-violet-500/30 rounded-2xl p-6 md:p-8 min-h-[400px] md:min-h-[500px]">
                    <div className="space-y-6">
                      {/* Single Design Process Visual */}
                      <div className="mb-6">
                        <img
                          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_copy_Npyzlox.jpg?format=webp&w=1500&dpr=1.4"
                          alt="T-shirt design process"
                          className="w-full h-80 md:h-96 object-cover rounded-xl mx-auto hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Creative Partnership Message */}
                <div className="lg:order-2 space-y-6 md:space-y-8">
                  <div className="space-y-4 md:space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      We Bring
                      <span className="block text-violet-400">Your Vision</span>
                      <span className="text-gray-300">to Life</span>
                    </h2>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
                      Professional design tools that understand your creativity.
                      Transform your personal ideas into high-quality, wearable
                      art.
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                      From concept to creation - we provide the technology, you
                      provide the vision. Together, we make something amazing.
                    </p>
                  </div>

                  {/* Platform Features */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center space-x-4 p-3 md:p-4 bg-violet-900/10 border border-violet-500/20 rounded-xl">
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-violet-400 rounded-full"></div>
                      <span className="text-gray-200 font-medium text-sm md:text-base">
                        3D preview to see exactly how it looks
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 md:p-4 bg-violet-900/10 border border-violet-500/20 rounded-xl">
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-violet-400 rounded-full"></div>
                      <span className="text-gray-200 font-medium text-sm md:text-base">
                        Professional printing technology
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 md:p-4 bg-violet-900/10 border border-violet-500/20 rounded-xl">
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-violet-400 rounded-full"></div>
                      <span className="text-gray-200 font-medium text-sm md:text-base">
                        Your design, exactly as you imagined
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SEE WHAT'S POSSIBLE */}
        <section className="py-12 md:py-20 ">
          <div className="container mx-auto px-4">
            <div
              className={`animate-on-scroll max-w-7xl mx-auto ${
                isVisible[2] ? "slide-in-left" : "opacity-0"
              }`}
            >
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 md:mb-8">
                  <span className="text-violet-400">See What's Possible</span>
                  <span className="block text-gray-300">
                    When You Express Yourself
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Thousands creating t-shirts that reflect their personality,
                  ideas, and unique perspective. Each design tells a personal
                  story.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Success Stories */}
                <div className="space-y-6 md:space-y-8">
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      Authentic
                      <span className="block text-violet-400">
                        Self-Expression
                      </span>
                      <span className="block text-gray-300">Made Real</span>
                    </h3>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
                      From artists and musicians to entrepreneurs and dreamers -
                      thousands are wearing their personalities with pride.
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                      Every t-shirt represents someone's creativity brought to
                      life. Personal stories, artistic visions, meaningful
                      messages - all made wearable.
                    </p>
                  </div>

                  {/* Success Metrics */}
                  <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8">
                    <div className="text-center p-4 md:p-6 bg-violet-900/10 border border-violet-500/20 rounded-xl">
                      <div className="flex items-center justify-center mb-3">
                        <FaUsers className="text-violet-400 text-lg md:text-xl mr-2 md:mr-3" />
                        <div className="text-2xl md:text-3xl font-bold text-violet-400 stats-counter">
                          25K+
                        </div>
                      </div>
                      <div className="text-gray-300 text-xs md:text-sm uppercase tracking-wide">
                        Creative Minds
                      </div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-violet-900/10 border border-violet-500/20 rounded-xl">
                      <div className="flex items-center justify-center mb-3">
                        <FaHeart className="text-violet-400 text-lg md:text-xl mr-2 md:mr-3" />
                        <div className="text-2xl md:text-3xl font-bold text-violet-400 stats-counter">
                          100K+
                        </div>
                      </div>
                      <div className="text-gray-300 text-xs md:text-sm uppercase tracking-wide">
                        Personal Expressions
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Design Showcase */}
                <div className="relative">
                  <div className="creative-card bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-500/20 rounded-2xl p-6 md:p-8 min-h-[400px] md:min-h-[500px]">
                    <div className="space-y-6">
                      {/* Single User Design */}
                      <div className="mb-6">
                        <img
                          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1730095002_1414689.jpg?format=webp&w=480&dpr=1.4"
                          alt="Custom t-shirt design"
                          className="w-full h-80 md:h-96 object-cover rounded-xl mx-auto hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="py-16 md:py-24 ">
          <div className="container mx-auto px-4 text-center">
            <div
              className={`animate-on-scroll max-w-5xl mx-auto ${
                isVisible[3] ? "fade-in-up" : "opacity-0"
              }`}
            >
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-8 leading-none">
                  Design Something
                  <span className="block text-gradient">That's Uniquely</span>
                  <span className="block text-gray-300">You</span>
                </h2>

                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                  Design your way to stand out.
                  <span className="block text-violet-300 font-medium mt-4">
                    Start creating a t-shirt that truly reflects{" "}
                    <em>who you are</em>.
                  </span>
                </p>

                <div className="space-y-6 md:space-y-8">
                  <button
                    onClick={() => setCurrentPage("customize")}
                    className="group bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-500 hover:to-violet-700 hover:shadow-[0_0_0.8em_#9333EA] text-white px-12 md:px-16 py-5 md:py-6 rounded-2xl font-bold text-xl md:text-2xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-3 md:gap-4">
                      <FaPalette className="text-xl md:text-2xl group-hover:rotate-12 transition-transform duration-300" />
                      Express Your Personality Now
                      <FaArrowRight className="text-lg md:text-xl group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>

                  <div className="text-center space-y-4">
                    <p className="text-gray-400 text-base md:text-lg">
                      Join{" "}
                      <span className="text-violet-400 font-bold">
                        25,000+ creators
                      </span>{" "}
                      expressing their authentic selves
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BrandStory;