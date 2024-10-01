'use client';
import React, { useEffect, useState } from 'react';
import { Footer } from '../components/footer';
import SideBar from '../components/sidebar';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from './utils/auth'; // Імпорт функції для перевірки авторизації
import Login from './login/page';
import DashboardLayout from './dashboard/layout';

// Завантаження повідомлень
const messages = {
  en: require('./locales/en.json'),
  ua: require('./locales/ua.json'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const locale = 'ua'; // Виберіть локаль
  const router = useRouter();
  router.push('/login');
  
  // Рендеримо контент, якщо авторизація пройшла успішно
  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
       <html lang={locale}>
       <body>
    
        {children}
        
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
