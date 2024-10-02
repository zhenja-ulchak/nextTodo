'use client';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const router = useRouter(); 
  useEffect(() => {
    const token = localStorage.getItem('user');

    if (!token) {
      // Якщо токен не знайдений, перенаправляємо на сторінку логіну
      router.push('/login');
    }
  }, [router]);
 
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Додайте тут контент для сторінки Dashboard */}
    </div>
  );
};

export default DashboardPage;