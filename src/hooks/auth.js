import React, {
    createContext,
    useCallback,
    useState,
    useContext,
  } from 'react';
  
  import api from '../services/api';
  
  
  const AuthContext = createContext({});
  
  const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
      const funcionario = localStorage.getItem('@ECOMMERCE:funcionario');
  
      if (funcionario) {
        return { funcionario: JSON.parse(funcionario) };
      }
  
      return {};
    });
  
    return (
      <AuthContext.Provider
        value={{ funcionario: data.funcionario }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  function useAuth() {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  }
  
  export { AuthProvider, useAuth };
  