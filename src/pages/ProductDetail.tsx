import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShoppingBag, Heart, Share2, Star, Truck, RotateCcw, Check, Plus, Minus } from 'lucide-react';
import { products } from '@/lib/data';
import ProductRating from '@/components/ProductRating';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/contexts/CartContext';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { toast } = useToast();
  const { addToCart } = useCart();
  
  // Find the product with the matching ID
  const product = products.find(p => p.id === productId);
  
  // Related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
  
  const [mainImage, setMainImage] = useState(product?.image || '');
  const [quantity, setQuantity] = useState(1);
  
  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">المنتج غير موجود</h2>
        <Link
          to="/products"
          className="bg-shop-800 text-white px-4 py-2 rounded-md hover:bg-shop-700 transition-colors"
        >
          العودة للتسوق
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <AnimatedTransition>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-shop-800">الرئيسية</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/products" className="hover:text-shop-800">المنتجات</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to={`/products?category=${product.category}`} className="hover:text-shop-800">
            {product.category}
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-shop-800">{product.name}</span>
        </div>
        
        {/* Product Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div>
            <div className="bg-gray-50 rounded-lg overflow-hidden mb-4 aspect-square">
              <img 
                src={mainImage} 
                alt={product.name} 
                className="w-full h-full object-contain object-center"
              />
            </div>
            
            {/* Image Gallery */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="grid grid-cols-5 gap-2">
                {[product.image, ...product.gallery].map((img, index) => (
                  <div 
                    key={index}
                    className={`aspect-square border rounded cursor-pointer overflow-hidden ${
                      mainImage === img ? 'border-shop-800 ring-2 ring-shop-300' : 'border-gray-200 hover:border-shop-300'
                    }`}
                    onClick={() => setMainImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-serif font-bold text-shop-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <ProductRating rating={product.rating} />
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-gray-600">{product.reviews || 0} تقييمات</span>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center mb-2">
                {product.oldPrice ? (
                  <>
                    <span className="text-gray-400 line-through text-lg ml-2">${product.oldPrice}</span>
                    <span className="text-2xl font-semibold text-shop-800">${product.price}</span>
                    <span className="mr-3 bg-red-100 text-red-600 px-2 py-1 rounded-md text-sm font-medium">
                      خصم {discount}%
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-semibold text-shop-800">${product.price}</span>
                )}
              </div>
              
              <div className="flex items-center text-green-600">
                <Check size={16} className="ml-1" />
                {product.stock > 10 ? 'متوفر في المخزون' : `كمية محدودة (${product.stock} متبقية)`}
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">الكمية</h3>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </Button>
                
                <span className="w-12 text-center font-medium">{quantity}</span>
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stock}
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Button 
                className="bg-shop-800 hover:bg-shop-700 text-white px-8 py-6 flex-grow md:flex-grow-0"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                إضافة إلى السلة
              </Button>
              
              <Button variant="outline" className="border-shop-200 hover:bg-shop-50">
                <Heart className="mr-2 h-5 w-5" />
                المفضلة
              </Button>
              
              <Button variant="outline" className="border-shop-200 hover:bg-shop-50">
                <Share2 className="mr-2 h-5 w-5" />
                مشاركة
              </Button>
            </div>
            
            {/* Product Features */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="bg-shop-50 p-2 rounded-full mr-3">
                    <Truck size={20} className="text-shop-700" />
                  </div>
                  <div>
                    <p className="font-medium">شحن مجاني</p>
                    <p className="text-sm text-gray-600">للطلبات فوق $50</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-shop-50 p-2 rounded-full mr-3">
                    <RotateCcw size={20} className="text-shop-700" />
                  </div>
                  <div>
                    <p className="font-medium">إرجاع سهل</p>
                    <p className="text-sm text-gray-600">30 يوم ضمان الإرجاع</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="description">التفاصيل</TabsTrigger>
              <TabsTrigger value="specifications">المواصفات</TabsTrigger>
              <TabsTrigger value="reviews">التقييمات</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="text-gray-700 leading-relaxed">
              {product.detailedDescription || product.description}
            </TabsContent>
            
            <TabsContent value="specifications">
              {product.specifications ? (
                <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-6 py-3 text-right text-sm font-medium text-gray-800">{key}</td>
                          <td className="px-6 py-3 text-right text-sm text-gray-600">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-center text-gray-500">لا توجد مواصفات متاحة لهذا المنتج</p>
              )}
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="space-y-6">
                {product.reviews && product.reviews > 0 ? (
                  <div>
                    {/* Add reviews content here */}
                    <div className="flex items-center mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">تقييمات العملاء</h3>
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                size={18}
                                className={`${
                                  star <= product.rating
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">
                            {product.rating.toFixed(1)} من 5 ({product.reviews} تقييم)
                          </span>
                        </div>
                      </div>
                      
                      <Button className="bg-shop-800 hover:bg-shop-700">
                        أضف تقييمك
                      </Button>
                    </div>
                    
                    {/* Sample reviews - in a real app, these would come from an API */}
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h4 className="font-medium">أحمد محمد</h4>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  size={14}
                                  className={`${
                                    star <= 5
                                      ? 'text-yellow-400 fill-yellow-400'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">منذ أسبوع</span>
                        </div>
                        <p className="text-gray-700">منتج رائع! سعيد جداً بالشراء وأنصح به الجميع.</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h4 className="font-medium">سارة علي</h4>
                            <div className="flex">
                              {[1, 2, 3, 4].map((star) => (
                                <Star
                                  key={star}
                                  size={14}
                                  className={`${
                                    star <= 4
                                      ? 'text-yellow-400 fill-yellow-400'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                              {[5].map((star) => (
                                <Star
                                  key={star}
                                  size={14}
                                  className="text-gray-300"
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">منذ شهر</span>
                        </div>
                        <p className="text-gray-700">جودة ممتازة بالنسبة للسعر، لكن التسليم كان متأخراً قليلاً.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">لا توجد تقييمات بعد لهذا المنتج</p>
                    <Button className="bg-shop-800 hover:bg-shop-700">
                      كن أول من يقيم
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-semibold text-shop-800">منتجات ذات صلة</h2>
            <Link to="/products" className="text-shop-700 hover:text-shop-900 font-medium flex items-center">
              عرض الكل <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <Link to={`/product/${product.id}`} className="block relative pt-[100%]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </Link>
                
                <div className="p-4">
                  <Link to={`/product/${product.id}`} className="block mb-1">
                    <h3 className="font-medium text-shop-800 hover:text-shop-700 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <ProductRating rating={product.rating} size="sm" className="mb-2" />
                  
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through mr-2">${product.oldPrice}</span>
                      )}
                      <span className="font-semibold text-shop-800">${product.price}</span>
                    </div>
                    
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="text-shop-800 hover:text-shop-600 rounded-full hover:bg-shop-50"
                      aria-label="Add to cart"
                      onClick={() => {
                        toast({
                          title: "تمت الإضافة إلى السلة",
                          description: `تمت إضافة ${product.name} إلى سلة التسوق`,
                        });
                      }}
                    >
                      <ShoppingBag size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default ProductDetail;
