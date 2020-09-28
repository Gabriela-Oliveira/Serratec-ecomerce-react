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
  
    const signIn = useCallback(async ({ nome, cpf, func }) => {
      // const response = await api.get('funcionario');
      // console.log("funcionarios", response);
  
      // const funcionario = response.data.filter(data => {
      //   console.log("data", data.nome, nome);
      //   return (data.nome === nome && data.cpf === cpf);
      // });
  
      console.log("funcionario", func);
  
      if(func.length > 0){
        localStorage.setItem('@ECOMMERCE:funcionario', JSON.stringify(func[0]));
        setData({ funcionario: func[0] });
      }else{
        throw new Error('Usuário ou senha inválido');
      }
    }, []);
  
    const signOut = useCallback(() => {
      localStorage.removeItem('@ECOMMERCE:funcionario');
  
      setData({});
    }, []);
  
    return (
      <AuthContext.Provider
        value={{ funcionario: data.funcionario, signIn, signOut }}
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
  