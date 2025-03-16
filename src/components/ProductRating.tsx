
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductRatingProps {
  rating: number;
  max?: number;
  showNumber?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ProductRating: React.FC<ProductRatingProps> = ({
  rating,
  max = 5,
  showNumber = false,
  size = 'md',
  className
}) => {
  // Size mappings for stars
  const sizeMap = {
    sm: 14,
    md: 18,
    lg: 22
  };

  // Class mappings for different sizes
  const textSizeMap = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  // Generate star elements
  const renderStars = () => {
    const stars = [];
    
    // Calculate the filled and half ratings
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Create filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <Star 
          key={`star-filled-${i}`}
          size={sizeMap[size]} 
          className="text-amber-400 fill-amber-400"
        />
      );
    }
    
    // Add half star if necessary
    if (hasHalfStar) {
      stars.push(
        <div key="star-half" className="relative">
          <Star size={sizeMap[size]} className="text-gray-300 fill-gray-300" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star size={sizeMap[size]} className="text-amber-400 fill-amber-400" />
          </div>
        </div>
      );
    }
    
    // Add remaining empty stars
    const emptyStars = max - filledStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star 
          key={`star-empty-${i}`}
          size={sizeMap[size]} 
          className="text-gray-300 fill-gray-300"
        />
      );
    }
    
    return stars;
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex">
        {renderStars()}
      </div>
      
      {showNumber && (
        <span className={cn("ml-2 text-shop-700", textSizeMap[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default ProductRating;
