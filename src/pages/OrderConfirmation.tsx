
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedTransition from '@/components/AnimatedTransition';

const OrderConfirmation = () => {
  // Generate random order number
  const orderNumber = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
  
  return (
    <AnimatedTransition>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-shop-800 mb-4">تم تأكيد طلبك!</h1>
          
          <p className="text-gray-600 mb-6">
            شكراً لطلبك. لقد تم تأكيد طلبك وسيتم تجهيزه قريباً.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-8">
            <p className="text-lg font-medium mb-2">رقم الطلب: <span className="text-shop-800">{orderNumber}</span></p>
            <p className="text-gray-600">
              ستتلقى رسالة بريد إلكتروني تأكيد بتفاصيل طلبك قريباً.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-center items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-shop-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-shop-800" />
              </div>
              <div className="w-16 h-1 bg-shop-100"></div>
              <div className="w-10 h-10 rounded-full bg-shop-100 flex items-center justify-center">
                <Package className="w-5 h-5 text-shop-800" />
              </div>
              <div className="w-16 h-1 bg-gray-200"></div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            <div className="flex justify-between text-sm px-4">
              <span className="text-shop-800 font-medium">تم تأكيد الطلب</span>
              <span className="text-shop-800 font-medium">جاري التجهيز</span>
              <span className="text-gray-500">تم التسليم</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Link to="/products">
              <Button className="w-full bg-shop-800 hover:bg-shop-700">
                <ArrowRight className="ml-2 h-4 w-4" />
                مواصلة التسوق
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="w-full">
                العودة للصفحة الرئيسية
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default OrderConfirmation;
