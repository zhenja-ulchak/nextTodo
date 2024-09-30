'use client';  
import React from 'react';
import { Footer } from '../components/footer'
import SideBar from '../components/sidebar'
import { NextIntlClientProvider  } from 'next-intl';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from './utils/auth';


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

  // Якщо користувач не авторизований — редирект на логін
  if (!isAuthenticated()) {
    router.push('/login');  // Переадресовуємо на логін
    return null; // Повертаємо порожній layout, поки редирект не завершиться
  }
  
  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      <html lang={locale}>
        <body>
          <SideBar />
          {children}
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}

