
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/lib/data';
import ProductGrid from '@/components/ProductGrid';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('q') || '';
  
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  
  // تعريف التصنيفات
  const categories = [
    { id: 'Men', name: 'رجالي', image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3' },
    { id: 'Women', name: 'نسائي', image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3' },
    { id: 'Kids', name: 'أطفال', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3' },
    { id: 'Electronics', name: 'إلكترونيات', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3' }
  ];
  
  // تهيئة حالة المنتجات المفلترة
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // تحديث المنتجات المفلترة عند تغيير التصنيف أو كلمة البحث
  useEffect(() => {
    let result = products;
    
    // فلترة حسب التصنيف إذا تم تحديده
    if (categoryParam) {
      result = result.filter(product => product.category === categoryParam);
    }
    
    // فلترة حسب كلمة البحث إذا تم إدخالها
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [categoryParam, searchQuery]);

  // تصنيف المنتجات الإلكترونية
  const electronicCategories = [
    { id: 'headphones', name: 'سماعات', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3' },
    { id: 'smartwatch', name: 'ساعات ذكية', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3' },
    { id: 'tv', name: 'تلفزيونات', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3' },
    { id: 'camera', name: 'كاميرات', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3' },
    { id: 'speaker', name: 'مكبرات صوت', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3' },
    { id: 'laptop', name: 'أجهزة لابتوب', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3' }
  ];

  return (
    <AnimatedTransition>
      <div className="container mx-auto px-4 py-8">
        {/* رأس الصفحة */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-shop-800 mb-4">
            {categoryParam ? 
              `${categoryParam === 'Men' ? 'منتجات رجالية' : 
                categoryParam === 'Women' ? 'منتجات نسائية' : 
                categoryParam === 'Kids' ? 'منتجات أطفال' : 
                categoryParam === 'Electronics' ? 'منتجات إلكترونية' : 
                'منتجات مخصصة'}` : 
              'جميع المنتجات'}
          </h1>
          <p className="text-shop-600 max-w-2xl mx-auto">
            استكشف مجموعة واسعة من المنتجات عالية الجودة، مصممة لتلبية احتياجاتك اليومية وتعزيز أسلوب حياتك.
          </p>
        </div>
        
        {/* قسم التصنيفات */}
        {!categoryParam && (
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-shop-800 mb-6 text-center">
              تصفح حسب الفئة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="group relative overflow-hidden rounded-lg shadow-md h-48"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* تصنيفات الإلكترونيات */}
        {categoryParam === 'Electronics' && (
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-shop-800 mb-6 text-center">
              تصفح منتجات الإلكترونيات
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {electronicCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/products?category=Electronics&q=${category.id}`}
                  className="group relative overflow-hidden rounded-lg shadow-md h-32"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 w-full p-2">
                    <h3 className="text-sm font-bold text-white">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* شريط البحث */}
        <div className="mb-8 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="ابحث عن منتج..."
              className="pl-10 pr-4 py-3 w-full"
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && localSearchQuery.trim()) {
                  // تحديث الرابط مع كلمة البحث
                  const params = new URLSearchParams(searchParams);
                  params.set('q', localSearchQuery);
                  window.location.search = params.toString();
                }
              }}
            />
          </div>
        </div>
        
        {/* إعرض المنتجات مع التصنيفات */}
        <ProductGrid 
          products={filteredProducts} 
          title={filteredProducts.length > 0 ? undefined : "لا توجد منتجات مطابقة لبحثك"}
          subtitle={
            filteredProducts.length === 0 
              ? "حاول استخدام كلمات بحث مختلفة أو تصفح جميع الفئات" 
              : undefined
          }
        />
      </div>
    </AnimatedTransition>
  );
};

export default Products;
