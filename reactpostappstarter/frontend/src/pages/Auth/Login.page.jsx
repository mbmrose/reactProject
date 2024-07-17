import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useBoundStore from '../../store/Store';
import Authentication from './Authentication'; 

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginService, authLoading, user } = useBoundStore((state) => state);

  useEffect(() => {
    if (user) {
      navigate('/posts');
    }
  }, [user, navigate]);

  const handleLogin = async (email, password) => {
    await loginService(email, password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Authentication onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
