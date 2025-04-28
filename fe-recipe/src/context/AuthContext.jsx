import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || null);

  const logout = () => {
    setApiKey(null);
    localStorage.removeItem('apiKey');
  };

  return (
    <AuthContext.Provider value={{ apiKey, setApiKey, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 