
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  const { cartCount } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
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
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
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
          "bg-white shadow-md py-3" : 
          "bg-white py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-shop-800 font-serif text-2xl font-bold transition-all hover:opacity-80">
            GlowHaven
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-shop-700 hover:text-shop-900 transition-colors font-medium">الرئيسية</Link>
            <Link to="/products" className="text-shop-700 hover:text-shop-900 transition-colors font-medium">المنتجات</Link>
            <Link to="/products?category=Men" className="text-shop-700 hover:text-shop-900 transition-colors font-medium">رجالي</Link>
            <Link to="/products?category=Women" className="text-shop-700 hover:text-shop-900 transition-colors font-medium">نسائي</Link>
            <Link to="/products?category=Kids" className="text-shop-700 hover:text-shop-900 transition-colors font-medium">أطفال</Link>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-shop-700 hover:text-shop-900 transition-colors"
              aria-label="بحث"
            >
              <Search size={20} />
            </button>
            
            <Link to="/favorites" className="p-2 text-shop-700 hover:text-shop-900 transition-colors" aria-label="المفضلة">
              <Heart size={20} />
            </Link>
            
            <Link 
              to={isAuthenticated ? "/account" : "/login"} 
              className="p-2 text-shop-700 hover:text-shop-900 transition-colors" 
              aria-label="الحساب"
            >
              <User size={20} />
            </Link>
            
            <Link to="/cart" className="p-2 text-shop-700 hover:text-shop-900 transition-colors relative" aria-label="سلة التسوق">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-shop-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-shop-700 hover:text-shop-900 transition-colors"
              aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
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
                placeholder="ابحث عن منتجات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pr-10 w-full p-3 border border-gray-200 rounded-md"
                autoFocus
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-shop-600"
                aria-label="تنفيذ البحث"
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
            <Link to="/" className="text-shop-700 hover:text-shop-900 py-2 transition-colors" onClick={toggleMobileMenu}>الرئيسية</Link>
            <Link to="/products" className="text-shop-700 hover:text-shop-900 py-2 transition-colors" onClick={toggleMobileMenu}>المنتجات</Link>
            <Link to="/products?category=Men" className="text-shop-700 hover:text-shop-900 py-2 transition-colors" onClick={toggleMobileMenu}>رجالي</Link>
            <Link to="/products?category=Women" className="text-shop-700 hover:text-shop-900 py-2 transition-colors" onClick={toggleMobileMenu}>نسائي</Link>
            <Link to="/products?category=Kids" className="text-shop-700 hover:text-shop-900 py-2 transition-colors" onClick={toggleMobileMenu}>أطفال</Link>
            <Link to={isAuthenticated ? "/account" : "/login"} className="text-shop-700 hover:text-shop-900 py-2 transition-colors" onClick={toggleMobileMenu}>
              {isAuthenticated ? "حسابي" : "تسجيل الدخول"}
            </Link>
            <Link to="/cart" className="text-shop-700 hover:text-shop-900 py-2 transition-colors" onClick={toggleMobileMenu}>
              سلة التسوق {cartCount > 0 && `(${cartCount})`}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
