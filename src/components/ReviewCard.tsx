
import React from 'react';
import { UserCircle } from 'lucide-react';
import ProductRating from './ProductRating';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';

interface ReviewCardProps {
  review: {
    id: string;
    user: {
      name: string;
      avatar?: string;
    };
    rating: number;
    date: Date;
    title: string;
    content: string;
    helpful: number;
    verified: boolean;
  };
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, className }) => {
  const timeAgo = formatDistanceToNow(new Date(review.date), { addSuffix: true });

  return (
    <div className={cn("bg-white p-6 rounded-lg border border-shop-100", className)}>
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          {review.user.avatar ? (
            <img 
              src={review.user.avatar} 
              alt={review.user.name} 
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-shop-200 text-shop-600 flex items-center justify-center">
              <UserCircle size={28} />
            </div>
          )}
          
          <div>
            <p className="font-medium text-shop-800">{review.user.name}</p>
            <p className="text-xs text-shop-500">{timeAgo}</p>
          </div>
        </div>
        
        {review.verified && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            Verified Purchase
          </span>
        )}
      </div>
      
      <div className="mt-4">
        <div className="flex items-center gap-3 mb-2">
          <ProductRating rating={review.rating} size="sm" />
          <h4 className="font-medium text-shop-800">{review.title}</h4>
        </div>
        
        <p className="text-shop-600">{review.content}</p>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-shop-500">
          {review.helpful} {review.helpful === 1 ? 'person' : 'people'} found this helpful
        </div>
        
        <button className="text-sm text-shop-700 hover:text-shop-900 transition-colors">
          Helpful
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
