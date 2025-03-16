
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  
  const cartItemCount = 0; // This would come from a cart context in a real app

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search initiated",
        description: `Searching for "${searchQuery}"`,
        duration: 3000,
      });
      // In a real app, we would handle the search here
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? 
          "bg-white bg-opacity-80 backdrop-blur shadow-sm py-3" : 
          "bg-transparent py-5"
      )}
    >
      <div className="container-padding mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-shop-800 font-serif text-2xl font-bold transition-all hover:opacity-80">
            GlowHaven
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-shop-700 hover:text-shop-900 transition-colors">Home</Link>
            <Link to="/products" className="text-shop-700 hover:text-shop-900 transition-colors">Shop</Link>
            <Link to="/categories" className="text-shop-700 hover:text-shop-900 transition-colors">Categories</Link>
            <Link to="/about" className="text-shop-700 hover:text-shop-900 transition-colors">About</Link>
            <Link to="/contact" className="text-shop-700 hover:text-shop-900 transition-colors">Contact</Link>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-shop-700 hover:text-shop-900 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <Link to="/favorites" className="p-2 text-shop-700 hover:text-shop-900 transition-colors" aria-label="Favorites">
              <Heart size={20} />
            </Link>
            
            <Link to="/account" className="p-2 text-shop-700 hover:text-shop-900 transition-colors" aria-label="Account">
              <User size={20} />
            </Link>
            
            <Link to="/cart" className="p-2 text-shop-700 hover:text-shop-900 transition-colors relative" aria-label="Cart">
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-shop-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-shop-700 hover:text-shop-900 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Search bar - shown when search is clicked */}
        {searchOpen && (
          <div className="mt-4 animate-slide-down">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pr-10"
                autoFocus
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-shop-600"
                aria-label="Submit search"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        )}
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down absolute w-full left-0 top-full">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link to="/" className="text-shop-700 hover:text-shop-900 py-2 transition-colors" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/products" className="text-shop-700 hover:text-shop-900 py-2 transition-colors" onClick={toggleMobileMenu}>Shop</Link>
            <Link to="/categories" className="text-shop-700 hover:text-shop-900 py-2 transition-colors" onClick={toggleMobileMenu}>Categories</Link>
            <Link to="/about" className="text-shop-700 hover:text-shop-900 py-2 transition-colors" onClick={toggleMobileMenu}>About</Link>
            <Link to="/contact" className="text-shop-700 hover:text-shop-900 py-2 transition-colors" onClick={toggleMobileMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
