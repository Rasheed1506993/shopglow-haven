
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { List, Grid, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { Product } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  title, 
  subtitle,
  className 
}) => {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  
  const categories = Array.from(new Set(products.map(p => p.category)));

  const handleCategoryToggle = (category: string) => {
    if (categoryFilter.includes(category)) {
      setCategoryFilter(categoryFilter.filter(c => c !== category));
    } else {
      setCategoryFilter([...categoryFilter, category]);
    }
  };

  const resetFilters = () => {
    setPriceRange([0, 1000]);
    setCategoryFilter([]);
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const categoryMatch = categoryFilter.length === 0 || categoryFilter.includes(product.category);
    return priceMatch && categoryMatch;
  });

  return (
    <div className={className}>
      {/* Header with title and layout controls */}
      <div className="mb-8">
        {title && <h2 className="text-3xl font-serif font-bold text-shop-800">{title}</h2>}
        {subtitle && <p className="mt-2 text-shop-600">{subtitle}</p>}
        
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center">
            <p className="text-shop-600 mr-2">
              <span className="font-medium">{filteredProducts.length}</span> products
            </p>
            
            <Button
              variant="outline"
              size="sm"
              className="ml-4 border-shop-200 text-shop-700 hover:bg-shop-50"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={16} className="mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="text-sm text-shop-600 mr-2">View:</div>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "p-2 rounded", 
                layout === 'grid' ? "bg-shop-100 text-shop-800" : "text-shop-600"
              )}
              onClick={() => setLayout('grid')}
              aria-label="Grid view"
            >
              <Grid size={18} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "p-2 rounded", 
                layout === 'list' ? "bg-shop-100 text-shop-800" : "text-shop-600"
              )}
              onClick={() => setLayout('list')}
              aria-label="List view"
            >
              <List size={18} />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar - shown when filters are toggled or on larger screens */}
        {showFilters && (
          <div className="md:w-1/4 bg-white p-6 rounded-lg shadow-sm animate-slide-down md:animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-shop-800">Filters</h3>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={resetFilters}
                  className="text-sm text-shop-600 hover:text-shop-800 transition-colors"
                >
                  Reset all
                </button>
                
                <button 
                  onClick={() => setShowFilters(false)}
                  className="md:hidden text-shop-600 hover:text-shop-800 transition-colors"
                  aria-label="Close filters"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <h4 className="font-medium text-shop-800 mb-3">Price</h4>
              <div className="px-1">
                <input
                  type="range"
                  min={0}
                  max={1000}
                  step={10}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-sm text-shop-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <h4 className="font-medium text-shop-800 mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      checked={categoryFilter.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-shop-800 focus:ring-shop-700"
                    />
                    <label htmlFor={`category-${category}`} className="text-shop-600">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Products grid or list */}
        <div className={cn(
          "flex-grow",
          layout === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6"
        )}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                layout={layout}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-shop-600">No products match your selected filters.</p>
              <Button
                variant="outline"
                className="mt-4 border-shop-200 text-shop-700 hover:bg-shop-50"
                onClick={resetFilters}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
