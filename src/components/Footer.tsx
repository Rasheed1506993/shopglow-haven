
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-shop-50 border-t border-shop-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-shop-800">GlowHaven</h2>
            <p className="text-shop-600 max-w-xs">
              Curated products for a mindful and sophisticated lifestyle. Experience quality and elegance in every purchase.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-shop-600 hover:text-shop-800 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-shop-600 hover:text-shop-800 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-shop-600 hover:text-shop-800 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold uppercase tracking-wider text-shop-800">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-shop-600 hover:text-shop-800 transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/categories" className="text-shop-600 hover:text-shop-800 transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-shop-600 hover:text-shop-800 transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link to="/featured" className="text-shop-600 hover:text-shop-800 transition-colors">Featured</Link>
              </li>
              <li>
                <Link to="/sale" className="text-shop-600 hover:text-shop-800 transition-colors">Sale</Link>
              </li>
            </ul>
          </div>

          {/* Information column */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold uppercase tracking-wider text-shop-800">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-shop-600 hover:text-shop-800 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-shop-600 hover:text-shop-800 transition-colors">Shipping</Link>
              </li>
              <li>
                <Link to="/returns" className="text-shop-600 hover:text-shop-800 transition-colors">Returns</Link>
              </li>
              <li>
                <Link to="/faq" className="text-shop-600 hover:text-shop-800 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-shop-600 hover:text-shop-800 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-shop-600 hover:text-shop-800 transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold uppercase tracking-wider text-shop-800">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-shop-800 mr-3 mt-1 flex-shrink-0" />
                <span className="text-shop-600">123 Design Street, Creative City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-shop-800 mr-3 flex-shrink-0" />
                <span className="text-shop-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-shop-800 mr-3 flex-shrink-0" />
                <span className="text-shop-600">hello@glowhaven.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-shop-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-shop-600 text-sm">
              © {currentYear} GlowHaven. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/payment-icons-footer.png" alt="Payment methods" className="h-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
