
import React, { useState } from 'react';
import { Trash, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '@/lib/data';
import { cn } from '@/lib/utils';

interface CartItemProps {
  product: Product;
  quantity: number;
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemove: (productId: string) => void;
  className?: string;
}

const CartItem: React.FC<CartItemProps> = ({
  product,
  quantity,
  onUpdateQuantity,
  onRemove,
  className
}) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      onUpdateQuantity(product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);
    // Add a slight delay for animation
    setTimeout(() => {
      onRemove(product.id);
    }, 300);
  };

  const total = product.price * quantity;

  return (
    <div 
      className={cn(
        "flex items-center p-4 border-b border-shop-100 transition-all duration-300",
        isRemoving ? "opacity-0 transform translate-x-5" : "opacity-100",
        className
      )}
    >
      <div className="w-24 h-24 rounded-md overflow-hidden bg-shop-50 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <Link 
          to={`/product/${product.id}`} 
          className="font-serif text-lg font-medium text-shop-800 hover:text-shop-900 transition-colors"
        >
          {product.name}
        </Link>
        
        {product.size && (
          <p className="text-sm text-shop-600 mt-1">Size: {product.size}</p>
        )}
        
        {product.color && (
          <div className="flex items-center mt-1">
            <span className="text-sm text-shop-600 mr-2">Color:</span>
            <span 
              className="w-4 h-4 rounded-full inline-block border border-gray-200" 
              style={{ backgroundColor: product.color }}
              aria-label={`Product color: ${product.color}`}
            />
          </div>
        )}
      </div>
      
      <div className="mx-4 flex items-center border border-shop-200 rounded-md">
        <button 
          onClick={() => handleQuantityChange(quantity - 1)}
          className="p-2 text-shop-600 hover:text-shop-800 transition-colors"
          aria-label="Decrease quantity"
          disabled={quantity <= 1}
        >
          <Minus size={16} />
        </button>
        
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10) || 1)}
          className="w-12 text-center text-shop-800 border-x border-shop-200 py-1 focus:outline-none"
          aria-label="Quantity"
        />
        
        <button 
          onClick={() => handleQuantityChange(quantity + 1)}
          className="p-2 text-shop-600 hover:text-shop-800 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="w-24 text-right font-medium text-shop-800">
        ${total.toFixed(2)}
      </div>
      
      <button 
        onClick={handleRemove}
        className="ml-4 p-2 text-shop-500 hover:text-red-500 transition-colors"
        aria-label="Remove item"
      >
        <Trash size={18} />
      </button>
    </div>
  );
};

export default CartItem;
