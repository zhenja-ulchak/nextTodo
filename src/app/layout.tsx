'use client';
import React from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/navigation';


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
  // router.push('/login');
  
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
