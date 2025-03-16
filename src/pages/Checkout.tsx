
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Home, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import AnimatedTransition from '@/components/AnimatedTransition';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'السعودية',
    paymentMethod: 'credit-card',
    shippingMethod: 'standard',
  });
  
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'postalCode'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (emptyFields.length > 0) {
      toast.error('الرجاء ملء جميع الحقول المطلوبة');
      return;
    }
    
    // Simulate order processing
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast.success('تم تقديم طلبك بنجاح!');
      navigate('/order-confirmation');
    }, 2000);
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <AnimatedTransition>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-shop-800 mb-6 text-center">إتمام الطلب</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">معلومات الاتصال</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">الاسم الأول</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">الاسم الأخير</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Shipping Address */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">عنوان الشحن</h2>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">العنوان</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">المدينة</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">الرمز البريدي</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="country">البلد</Label>
                      <Input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">ملاحظات للطلب (اختياري)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="أي تعليمات خاصة للشحن أو التوصيل"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              
              {/* Shipping Method */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">طريقة الشحن</h2>
                
                <RadioGroup
                  value={formData.shippingMethod}
                  onValueChange={(value) => handleRadioChange('shippingMethod', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 space-x-reverse justify-between border p-3 rounded-md">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard" className="flex items-center cursor-pointer">
                        <Truck className="ml-2 h-4 w-4" />
                        شحن قياسي (3-5 أيام)
                      </Label>
                    </div>
                    <span className="font-medium">مجاناً</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse justify-between border p-3 rounded-md">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express" className="flex items-center cursor-pointer">
                        <Truck className="ml-2 h-4 w-4" />
                        شحن سريع (1-2 يوم)
                      </Label>
                    </div>
                    <span className="font-medium">$15.00</span>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Payment Method */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">طريقة الدفع</h2>
                
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) => handleRadioChange('paymentMethod', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 space-x-reverse border p-3 rounded-md">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center cursor-pointer">
                      <CreditCard className="ml-2 h-4 w-4" />
                      بطاقة ائتمان / خصم
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse border p-3 rounded-md">
                    <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" />
                    <Label htmlFor="cash-on-delivery" className="flex items-center cursor-pointer">
                      <Home className="ml-2 h-4 w-4" />
                      الدفع عند الاستلام
                    </Label>
                  </div>
                </RadioGroup>
                
                {formData.paymentMethod === 'credit-card' && (
                  <div className="mt-4 border p-4 rounded-md bg-gray-50">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">رقم البطاقة</Label>
                        <Input id="card-number" placeholder="XXXX XXXX XXXX XXXX" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">تاريخ الانتهاء</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="XXX" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Button
                type="submit"
                className="w-full py-6 bg-shop-800 hover:bg-shop-700 text-white text-lg"
                disabled={isProcessing}
              >
                {isProcessing ? 'جاري معالجة الطلب...' : 'تأكيد الطلب'}
              </Button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold mb-4">ملخص الطلب</h2>
              
              <div className="space-y-4 mb-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="w-16 h-16 rounded bg-gray-100 overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{item.product.name}</p>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>الكمية: {item.quantity}</span>
                        <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">إجمالي المنتجات</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">الشحن</span>
                  <span>
                    {formData.shippingMethod === 'express' ? '$15.00' : 'مجاناً'}
                  </span>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>الإجمالي</span>
                  <span>
                    ${(cartTotal + (formData.shippingMethod === 'express' ? 15 : 0)).toFixed(2)}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-3 bg-green-50 text-green-700 rounded-md flex">
                <Check className="h-5 w-5 ml-2 flex-shrink-0" />
                <p className="text-sm">
                  جميع المعاملات آمنة ومشفرة. تطبق سياسة الاسترجاع خلال 30 يوماً.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Checkout;
