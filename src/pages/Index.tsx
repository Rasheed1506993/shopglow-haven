
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShoppingBag, Star } from 'lucide-react';
import { products } from '@/lib/data';
import ProductGrid from '@/components/ProductGrid';
import ProductRating from '@/components/ProductRating';
import AnimatedTransition from '@/components/AnimatedTransition';

const Index = () => {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured);
  // Get new products
  const newProducts = products.filter(product => product.new);

  return (
    <AnimatedTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-shop-800 to-shop-900 text-white">
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                اكتشف منتجات فريدة بجودة استثنائية
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                مجموعة مميزة من المنتجات المختارة بعناية لتلبي جميع احتياجاتك بأسعار منافسة وجودة لا مثيل لها
              </p>
              <Link 
                to="/products" 
                className="inline-flex items-center bg-white text-shop-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                تسوق الآن
                <ChevronRight className="mr-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif font-semibold text-shop-800">المنتجات المميزة</h2>
              <Link to="/products" className="text-shop-700 hover:text-shop-900 font-medium flex items-center">
                عرض الكل <ChevronRight className="mr-1 h-5 w-5" />
              </Link>
            </div>
            
            <ProductGrid products={featuredProducts} limit={4} />
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif font-semibold text-shop-800">وصل حديثاً</h2>
              <Link to="/products" className="text-shop-700 hover:text-shop-900 font-medium flex items-center">
                عرض الكل <ChevronRight className="mr-1 h-5 w-5" />
              </Link>
            </div>
            
            <ProductGrid products={newProducts} limit={4} />
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="bg-shop-100 rounded-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-shop-900 mb-4">
                    عروض خاصة لفصل الصيف
                  </h2>
                  <p className="text-lg text-shop-700 mb-6">
                    استمتع بخصم يصل إلى 30% على جميع المنتجات الجديدة. العرض ساري حتى نهاية الشهر!
                  </p>
                  <Link 
                    to="/products" 
                    className="inline-flex items-center bg-shop-800 text-white px-6 py-3 rounded-md font-medium hover:bg-shop-900 transition-colors self-start"
                  >
                    تسوق العروض <ShoppingBag className="mr-2 h-5 w-5" />
                  </Link>
                </div>
                <div className="w-full md:w-1/2 bg-shop-200 min-h-[300px] md:min-h-[400px] relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3" 
                    alt="Summer collection" 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-16 px-4 bg-shop-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-shop-800 mb-8 text-center">
              الأكثر مبيعاً
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.slice(0, 3).map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
                  <Link to={`/product/${product.id}`} className="block relative pt-[100%]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    {product.oldPrice && (
                      <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-medium px-2 py-1 rounded">
                        خصم {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                      </span>
                    )}
                  </Link>
                  
                  <div className="p-4">
                    <Link to={`/product/${product.id}`} className="block mb-1">
                      <h3 className="font-serif font-medium text-shop-800 hover:text-shop-700 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <ProductRating rating={product.rating} size="sm" className="mb-2" />
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        {product.oldPrice && (
                          <span className="text-gray-400 line-through mr-2">${product.oldPrice}</span>
                        )}
                        <span className="font-semibold text-shop-800">${product.price}</span>
                      </div>
                      
                      <button 
                        className="text-shop-800 hover:text-shop-600 p-1 rounded-full border border-shop-200 hover:border-shop-300 transition-colors"
                        aria-label="Add to cart"
                      >
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features/Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-shop-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shop-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">منتجات عالية الجودة</h3>
                <p className="text-gray-600">جميع منتجاتنا مصنوعة من مواد عالية الجودة ومضمونة للاستخدام طويل الأمد</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-shop-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shop-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">شحن سريع</h3>
                <p className="text-gray-600">نقدم خدمة شحن سريعة وآمنة لجميع طلباتك مع إمكانية التتبع</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-shop-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shop-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">دفع آمن</h3>
                <p className="text-gray-600">طرق دفع متعددة ومضمونة لحماية معلوماتك الشخصية وضمان تجربة تسوق آمنة</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimatedTransition>
  );
};

export default Index;
