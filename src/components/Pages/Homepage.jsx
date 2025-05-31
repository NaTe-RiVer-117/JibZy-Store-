import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Star,
  ArrowRight,
  Truck,
  Shield,
  Headphones,
} from "lucide-react";
import ProductCard, { ProductGrid, ProductSection } from "../UI/ProductCard";
import {
  getBestSellers,
  getNewArrivals,
  getProductsByCategory,
} from "../../data/productData";
import { FaPalette } from "react-icons/fa";
import HeroSection from "../UI/HeroSection";

const Homepage = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  //  product data
  const bestSellers = getBestSellers().slice(0, 8);
  const newArrivals = getNewArrivals().slice(0, 8);
  const marvelPreview = getProductsByCategory("marvel").slice(0, 4);
  const dcPreview = getProductsByCategory("dc").slice(0, 4);
  const animePreview = getProductsByCategory("anime").slice(0, 4);

  const collections = [
    {
      id: "marvel",
      name: "Marvel Heroes",
      description: "Superhero designs that inspire",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1724912570_5870366.jpg?format=webp&w=480&dpr=1.4",
      count: `${getProductsByCategory("marvel").length}+ designs`,
      color: "from-red-900/80 via-red-800/70 to-orange-900/80",
      hoverColor: "from-red-900/40 via-red-800/30 to-orange-900/40",
      textColor: "text-red-100",
    },
    {
      id: "dc",
      name: "DC Universe",
      description: "Iconic heroes and legends",
      image: dcPreview[0]?.image,
      count: `${getProductsByCategory("dc").length}+ designs`,
      color: "from-blue-900/80 via-indigo-900/70 to-purple-900/80",
      hoverColor: "from-blue-900/40 via-indigo-900/30 to-purple-900/40",
      textColor: "text-blue-100",
    },
    {
      id: "anime",
      name: "Anime Collection",
      description: "Japanese culture & manga art",
      image: animePreview[0]?.image,
      count: `${getProductsByCategory("anime").length}+ designs`,
      color: "from-purple-900/80 via-fuchsia-800/70 to-pink-900/80",
      hoverColor: "from-purple-900/40 via-fuchsia-800/30 to-pink-900/40",
      textColor: "text-purple-100",
    },
    {
      id: "user-designs",
      name: "Curated User Designs",
      description: "Created by our community",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1726223269_2229639.jpg?format=webp&w=480&dpr=1.4",
      count: `${getProductsByCategory("userDesigns").length}+ designs`,
      color: "from-emerald-900/80 via-teal-800/70 to-cyan-900/80",
      hoverColor: "from-emerald-900/40 via-teal-800/30 to-cyan-900/40",
      textColor: "text-emerald-100",
    },
  ];

  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      description: "On orders above ₹999",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Quality",
      description: "100% cotton & superior printing",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Always here to help you",
    },
  ];

  return (
    <div className="homepage bg-black text-white">
      {/* Hero Section */}
      <HeroSection setCurrentPage={setCurrentPage} />

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-700 hover:shadow-[0_0_0.5em_#FFF] text-white rounded-full mb-4  group-hover:scale-110 ">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Shop by Collection
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our curated collections designed for every fan and style
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-violet-500 transition-all duration-500 cursor-pointer"
                onClick={() => setCurrentPage(collection.id)}
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient overlay that becomes more transparent on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-90 group-hover:opacity-60 transition-opacity duration-500`}
                  ></div>

                  {/* Dark overlay that lightens on hover */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-sm opacity-90 group-hover:opacity-100 mb-3 transition-opacity">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-3 group-hover:border-white/20 transition-all">
                      <span className="text-xs font-medium">
                        {collection.count}
                      </span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-violet-300 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <ProductSection
        title="Best Sellers"
        subtitle="Most loved by our customers"
        products={bestSellers}
        columns={4}
        onViewAll={() => setCurrentPage("bestsellers")}
        className=" text-white"
      />

      {/* New Arrivals Section */}
      <ProductSection
        title="New Arrivals"
        subtitle="Fresh designs just dropped"
        products={newArrivals}
        columns={4}
        onViewAll={() => setCurrentPage("new-arrivals")}
        className="bg-gray-900 text-white"
      />

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of customers who've designed their perfect t-shirts
              with JibZyStore
            </p>
            <button
              onClick={() => setCurrentPage("customize")}
              className="bg-gradient-to-r from-violet-500 to-violet-700 hover:shadow-[0_0_0.8em_#9333EA] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-colors duration-300 shadow-lg  flex items-center justify-center mx-auto"
            >
              <div className="flex items-center justify-center gap-2">
                <FaPalette className="text-white text-sm" />
                Start Your Design Journey
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
