
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import ProductRating from './ProductRating';
import { cn } from '@/lib/utils';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'list';
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  layout = 'grid',
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
      duration: 3000,
    });
    
    // In a real app, we would add the product to the cart here
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsFavorite(!isFavorite);
    
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${product.name} has been ${isFavorite ? "removed from" : "added to"} your favorites`,
      duration: 3000,
    });
    
    // In a real app, we would handle favorites here
  };

  if (layout === 'list') {
    return (
      <Link 
        to={`/product/${product.id}`}
        className={cn(
          "group flex gap-6 p-4 rounded-lg bg-white hover:shadow-md transition-all duration-300",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="product-image-zoom w-1/3 h-48 rounded-md overflow-hidden bg-shop-50 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover object-center transition-all duration-500"
            loading="lazy"
          />
        </div>
        
        <div className="w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-serif text-xl font-semibold text-shop-800 group-hover:text-shop-900 transition-colors">
                {product.name}
              </h3>
              
              <button
                onClick={handleToggleFavorite}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                className={cn(
                  "p-1.5 rounded-full transition-all",
                  isFavorite ? "text-red-500" : "text-shop-400 hover:text-red-500"
                )}
              >
                <Heart size={20} className={isFavorite ? "fill-red-500" : ""} />
              </button>
            </div>
            
            <p className="mt-2 text-shop-600 line-clamp-2">{product.description}</p>
            
            <div className="mt-3">
              <ProductRating rating={product.rating} showNumber={true} />
            </div>
            
            {product.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-shop-100 text-shop-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-shop-800">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-sm text-shop-400 line-through">${product.oldPrice.toFixed(2)}</span>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="btn-primary py-2 px-4 flex items-center gap-2"
              aria-label="Add to cart"
            >
              <ShoppingBag size={18} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/product/${product.id}`}
      className={cn(
        "group flex flex-col rounded-lg overflow-hidden bg-white card-hover",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Overlay with actions that appear on hover */}
        <div className={cn(
          "absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center gap-3 transition-all duration-300",
          isHovered ? "bg-opacity-10 opacity-100" : "opacity-0"
        )}>
          {/* Quick add to cart button */}
          <button
            onClick={handleAddToCart}
            className="p-3 bg-white rounded-full shadow-md transform translate-y-2 transition-transform duration-300 hover:bg-shop-50 group-hover:translate-y-0"
            aria-label="Add to cart"
          >
            <ShoppingBag size={20} className="text-shop-800" />
          </button>
          
          {/* Favorite button */}
          <button
            onClick={handleToggleFavorite}
            className={cn(
              "p-3 bg-white rounded-full shadow-md transform translate-y-2 transition-transform duration-300 hover:bg-shop-50 group-hover:translate-y-0",
              isFavorite ? "text-red-500" : "text-shop-800"
            )}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart size={20} className={isFavorite ? "fill-red-500" : ""} />
          </button>
        </div>
        
        {/* Sale tag if oldPrice exists */}
        {product.oldPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            Sale
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <ProductRating rating={product.rating} size="sm" />
        </div>
        
        <h3 className="font-serif text-lg font-medium text-shop-800 group-hover:text-shop-900 transition-colors">
          {product.name}
        </h3>
        
        <p className="mt-1 text-shop-600 text-sm line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold text-shop-800">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-sm text-shop-400 line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
