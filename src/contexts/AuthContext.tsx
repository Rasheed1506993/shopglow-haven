
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

// Type for user
interface User {
  id: string;
  email: string;
  name: string;
  // Add more user properties as needed
}

// Type for auth context
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // In a real app, this would be an API call
      // For demo purposes, we'll just simulate a successful login after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, we'll accept any credentials with validation
      if (!email || !password) {
        toast.error('جميع الحقول مطلوبة');
        return false;
      }
      
      // Create a mock user
      const mockUser = {
        id: 'user-' + Math.floor(Math.random() * 10000),
        email,
        name: email.split('@')[0]
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      toast.success('تم تسجيل الدخول بنجاح');
      return true;
    } catch (error) {
      toast.error('فشل تسجيل الدخول');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // In a real app, this would be an API call
      // For demo purposes, we'll just simulate a successful registration after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation
      if (!name || !email || !password) {
        toast.error('جميع الحقول مطلوبة');
        return false;
      }
      
      // Create a new user
      const newUser = {
        id: 'user-' + Math.floor(Math.random() * 10000),
        email,
        name
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      toast.success('تم إنشاء الحساب بنجاح');
      return true;
    } catch (error) {
      toast.error('فشل إنشاء الحساب');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.info('تم تسجيل الخروج');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
