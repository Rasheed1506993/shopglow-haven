
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/lib/data';
import ProductGrid from '@/components/ProductGrid';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('q') || '';
  
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  
  // Initialize filtered products state
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Update filtered products when category or search query changes
  useEffect(() => {
    let result = products;
    
    // Filter by category if provided
    if (categoryParam) {
      result = result.filter(product => product.category === categoryParam);
    }
    
    // Filter by search query if provided
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

  return (
    <AnimatedTransition>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-shop-800 mb-4">
            {categoryParam ? `${categoryParam}` : 'جميع المنتجات'}
          </h1>
          <p className="text-shop-600 max-w-2xl mx-auto">
            استكشف مجموعة واسعة من المنتجات عالية الجودة، مصممة لتلبية احتياجاتك اليومية وتعزيز أسلوب حياتك.
          </p>
        </div>
        
        {/* Search Bar */}
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
                  // Update URL with search query
                  const params = new URLSearchParams(searchParams);
                  params.set('q', localSearchQuery);
                  window.location.search = params.toString();
                }
              }}
            />
          </div>
        </div>
        
        {/* ProductGrid with all filtering capabilities */}
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
