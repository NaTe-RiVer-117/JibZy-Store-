import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Heart
} from 'lucide-react';

const Footer = ({ setCurrentPage }) => {

  const collections = [
    { id: 'marvel', name: 'Marvel Heroes' },
    { id: 'dc', name: 'DC Universe' },
    { id: 'anime', name: 'Anime Collection' },
    { id: 'customize', name: 'Custom Designs' }
  ];

  const companyLinks = [
    { name: 'Our Story', id: 'story' },
    { name: 'How It Works', id: 'customize' },
    { name: 'Size Guide', id: 'size-guide' },
    { name: 'Quality Promise', id: 'quality' }
  ];

  const supportLinks = [
    { name: 'Contact Us', id: 'contact' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Shipping Info', id: 'shipping' },
    { name: 'Returns', id: 'returns' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', url: '#' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', url: '#' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', url: '#' },
    { icon: <Youtube className="w-5 h-5" />, name: 'YouTube', url: '#' }
  ];

  return (
    <footer className="bg-black text-white relative">
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-6 md:py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            
            {/* Logo & Brand */}
            <div className="space-y-2 md:space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br hover:shadow-[0_0_0.8em_#9333EA] from-violet-500 via-violet-600 to-violet-700 rounded-xl flex items-center justify-center">
                  <img src="./l.png" alt="LibZyStore Logo" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">LibZyStore</h3>
                  <p className="text-gray-400 text-xs md:text-sm">Design Your Story</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md text-sm md:text-base">
                Express your unique personality through custom t-shirt designs. 
                Every shirt tells a story - make yours unforgettable with our 3D design studio.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3">
              <h4 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">Get In Touch</h4>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-violet-400" />
                <span className="text-xs md:text-sm">hello@libzystore.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-violet-500" />
                <span className="text-xs md:text-sm">+91 987654321</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-violet-600" />
                <span className="text-xs md:text-sm">India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-2 md:space-y-3">
              <h4 className="font-semibold text-white text-sm md:text-base">Follow Us</h4>
              <div className="flex space-x-2 md:space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-violet-500 hover:to-violet-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Collections  */}
          <div className=" md:block md:space-y-6">
            <h4 className="font-semibold text-white text-base md:text-lg">Collections</h4>
            <div className="space-y-2 md:space-y-3">
              {collections.map((collection) => (
                <button
                  key={collection.id}
                  onClick={() => setCurrentPage && setCurrentPage(collection.id)}
                  className="block text-gray-300 hover:text-violet-400 transition-colors duration-200 text-xs md:text-sm hover:translate-x-1 transform text-left"
                >
                  {collection.name}
                </button>
              ))}
            </div>
          </div>

          {/* Company  */}
          <div className="hidden md:block md:space-y-6">
            <h4 className="font-semibold text-white text-base md:text-lg">Company</h4>
            <div className="space-y-2 md:space-y-3">
              {companyLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage && setCurrentPage(link.id)}
                  className="block text-gray-300 hover:text-violet-400 transition-colors duration-200 text-xs md:text-sm hover:translate-x-1 transform text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="hidden md:block md:space-y-6">
            <h4 className="font-semibold text-white text-base md:text-lg">Support</h4>
            <div className="space-y-2 md:space-y-3">
              {supportLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage && setCurrentPage(link.id)}
                  className="block text-gray-300 hover:text-violet-400 transition-colors duration-200 text-xs md:text-sm hover:translate-x-1 transform text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 py-3 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 md:space-x-4 text-gray-400 text-xs md:text-sm">
              <span>&copy; 2025 LibZyStore. All rights reserved.</span>
            
            
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-3 md:space-x-6 text-gray-400 text-xs md:text-sm">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700"></div>
    </footer>
  );
};

export default Footer;