import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { User } from '@/lib/types';
import { mockUser } from '@/lib/mock/users';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_KEY = 'agricole_session';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const stored = await AsyncStorage.getItem(SESSION_KEY);
        if (stored) {
          setUser(JSON.parse(stored));
        }
      } catch {
        await AsyncStorage.removeItem(SESSION_KEY);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
    if (!email || !_password) return false;
    const sessionUser: User = {
      ...mockUser,
      email,
    };
    setUser(sessionUser);
    await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    return true;
  }, []);

  const register = useCallback(
    async (email: string, _password: string, name: string): Promise<boolean> => {
      if (!email || !_password || !name) return false;
      const sessionUser: User = {
        ...mockUser,
        id: `user-${Date.now()}`,
        name,
        email,
        joinDate: new Date().toISOString().split('T')[0],
      };
      setUser(sessionUser);
      await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
      return true;
    },
    []
  );

  const logout = useCallback(async () => {
    setUser(null);
    await AsyncStorage.removeItem(SESSION_KEY);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
