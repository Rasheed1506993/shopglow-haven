
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Package, ShoppingBag, Heart, LogOut, MapPin, Settings, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import AnimatedTransition from '@/components/AnimatedTransition';

const Account = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if not logged in
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  if (!user) {
    return null; // Don't render anything while redirecting
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AnimatedTransition>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-shop-800 mb-8 text-center">حسابي</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-shop-100 rounded-full flex items-center justify-center text-shop-800">
                  <User size={30} />
                </div>
                <div className="mr-4">
                  <h2 className="font-semibold text-xl">{user.name}</h2>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              </div>
              
              <Button onClick={handleLogout} variant="outline" className="w-full mb-6">
                <LogOut className="ml-2 h-4 w-4" />
                تسجيل الخروج
              </Button>
              
              <div className="space-y-2">
                <div className="font-medium mb-1 text-gray-600">الروابط السريعة</div>
                
                <div className="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                  <Package className="h-5 w-5 text-shop-700 ml-3" />
                  <span>طلباتي</span>
                </div>
                
                <div className="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                  <Heart className="h-5 w-5 text-shop-700 ml-3" />
                  <span>المفضلة</span>
                </div>
                
                <div className="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                  <MapPin className="h-5 w-5 text-shop-700 ml-3" />
                  <span>العناوين</span>
                </div>
                
                <div className="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                  <CreditCard className="h-5 w-5 text-shop-700 ml-3" />
                  <span>طرق الدفع</span>
                </div>
                
                <div className="flex items-center p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                  <Settings className="h-5 w-5 text-shop-700 ml-3" />
                  <span>إعدادات الحساب</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="mb-6 w-full grid grid-cols-3">
                <TabsTrigger value="orders" className="text-center">طلباتي</TabsTrigger>
                <TabsTrigger value="profile" className="text-center">الملف الشخصي</TabsTrigger>
                <TabsTrigger value="addresses" className="text-center">العناوين</TabsTrigger>
              </TabsList>
              
              <TabsContent value="orders">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">طلباتي</h2>
                  
                  <div className="text-center py-12">
                    <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">لا توجد طلبات حتى الآن</h3>
                    <p className="text-gray-500 mb-6">ابدأ التسوق واستكشف مجموعتنا من المنتجات الرائعة.</p>
                    <Button onClick={() => navigate('/products')} className="bg-shop-800 hover:bg-shop-700">
                      تصفح المنتجات
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="profile">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">الملف الشخصي</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">الاسم الأول</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shop-500"
                          defaultValue={user.name.split(' ')[0]}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">الاسم الأخير</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shop-500"
                          defaultValue={user.name.split(' ')[1] || ''}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shop-500"
                          defaultValue={user.email}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">رقم الهاتف</label>
                        <input
                          type="tel"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shop-500"
                          placeholder="+966 5xxxxxxxx"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">تغيير كلمة المرور</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shop-500"
                        placeholder="اترك فارغاً إذا لم ترغب في التغيير"
                      />
                    </div>
                    
                    <Button type="submit" className="bg-shop-800 hover:bg-shop-700">
                      حفظ التغييرات
                    </Button>
                  </form>
                </div>
              </TabsContent>
              
              <TabsContent value="addresses">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">العناوين</h2>
                    <Button className="bg-shop-800 hover:bg-shop-700">
                      إضافة عنوان جديد
                    </Button>
                  </div>
                  
                  <div className="text-center py-12">
                    <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">لا توجد عناوين محفوظة</h3>
                    <p className="text-gray-500 mb-4">
                      أضف عنواناً لتسهيل عملية الشراء في المستقبل.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Account;
