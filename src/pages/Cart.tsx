
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, ArrowRight, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import CartItem from '@/components/CartItem';
import AnimatedTransition from '@/components/AnimatedTransition';

const Cart = () => {
  const { cartItems, clearCart, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <AnimatedTransition>
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
          <ShoppingBag className="w-20 h-20 text-gray-300 mb-6" />
          <h1 className="text-3xl font-serif font-bold text-shop-800 mb-4">سلة التسوق فارغة</h1>
          <p className="text-gray-600 mb-8 text-center max-w-md">
            لم تضف أي منتجات إلى سلة التسوق بعد. استكشف مجموعتنا من المنتجات الرائعة وابدأ التسوق.
          </p>
          <Link to="/products">
            <Button className="bg-shop-800 hover:bg-shop-700 px-6">
              استمر في التسوق
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </AnimatedTransition>
    );
  }

  return (
    <AnimatedTransition>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-shop-800 mb-4">سلة التسوق</h1>
          <p className="text-gray-600">
            لديك {cartItems.length} {cartItems.length === 1 ? 'منتج' : 'منتجات'} في سلة التسوق
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-1">
              {cartItems.map((item) => (
                <CartItem
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
              
              <div className="p-4 flex justify-between">
                <Button
                  variant="outline"
                  className="text-red-500 hover:text-red-600 border-red-200 hover:border-red-300 hover:bg-red-50"
                  onClick={clearCart}
                >
                  <Trash className="mr-2 h-4 w-4" />
                  تفريغ السلة
                </Button>
                
                <Link to="/products">
                  <Button variant="outline">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    مواصلة التسوق
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">ملخص الطلب</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">إجمالي المنتجات</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">الشحن</span>
                  <span>مجاني</span>
                </div>
                
                <Separator className="my-3" />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>الإجمالي</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <Link to="/checkout">
                <Button className="w-full bg-shop-800 hover:bg-shop-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  متابعة الدفع
                </Button>
              </Link>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>خيارات الدفع الآمنة</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Cart;
