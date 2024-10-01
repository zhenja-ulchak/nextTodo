'use client';
import { isAuthenticated } from '../utils/auth'; // Імпорт функції для перевірки авторизації
import Login from '../login/page';
import DashboardLayout from '../dashboard/layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function loginLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    const [authChecked, setAuthChecked] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const locale = 'ua'; // Виберіть локаль
    const router = useRouter();
  
    useEffect(() => {
      // Перевіряємо, чи користувач авторизований
      const checkAuth = async () => {
        const authenticated = await isAuthenticated(); // Ваш метод для перевірки куки або токена
        setIsAuth(authenticated);
        setAuthChecked(true);
      };
  
      checkAuth();
    }, []);
  
    // Показуємо екран завантаження, поки не перевірена авторизація
    if (!authChecked) {
      return <div>Loading...</div>;
    }
  
    // Якщо користувач не авторизований, перенаправляємо на логін
    // if (!isAuth) {
    //   router.push('/login');
    //   return null; // При перенаправленні не рендеримо нічого
    // }
  
    // Якщо користувач авторизований, перенаправляємо на dashboard
    if (isAuth) {
      router.push('/dashboard');
      return null; // При перенаправленні не рендеримо нічого
    }
  

    return (
  
   
        <div>{children}</div>
   
    );
  }
  