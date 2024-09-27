import React from 'react';
import { Footer } from '../components/footer'
import SideBar from '../components/sidebar'
import { NextIntlClientProvider  } from 'next-intl';

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