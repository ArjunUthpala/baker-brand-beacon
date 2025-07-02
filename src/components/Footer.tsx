
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-width section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">IMR</span>
              </div>
              <span className="text-xl font-bold">IMR Bakers</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your authentic Sri Lankan bakery serving traditional flavors with genuine warmth and hospitality. 
              ආයුබෝවන් - Welcome to our family!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links - ඉක්මන් සබැඳි</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-300 hover:text-primary transition-colors">About Us - අප ගැන</a></li>
              <li><a href="/menu" className="text-gray-300 hover:text-primary transition-colors">Our Menu - අපේ මෙනුව</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-primary transition-colors">Gallery - ගැලරිය</a></li>
              <li><a href="/branches" className="text-gray-300 hover:text-primary transition-colors">Find Us - අපව සොයන්න</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info - සම්බන්ධතා</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-gray-300">+94 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-gray-300">hello@imrbakers.lk</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-gray-300">123 Galle Road<br />Colombo 03, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Opening Hours - කාර්ය කාලය</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>6:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>7:00 AM - 7:00 PM</span>
              </div>
              <div className="mt-3 text-xs text-primary">
                🌅 Fresh pol roti available from 6:30 AM daily
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 IMR Bakers. All rights reserved. | Bringing Sri Lankan flavors to your neighborhood with love | සියලු හිමිකම් ආරක්ෂිතයි</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
