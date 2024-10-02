'use client';
import React from 'react';
import Debug from '../components/DebugPanel'
import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import useDebugStore from '../app/store/DebugStore';
import { Button } from '@mui/material';

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
  const isOpen = useDebugStore((state: { isOpen: any; }) => state.isOpen);
  const locale = 'ua';
  const router = useRouter();
 


  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      <html lang={locale}>
        <body>
     
          {children}
          <Debug open={isOpen} />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
