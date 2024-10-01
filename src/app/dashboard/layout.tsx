'use client';
import React, { useEffect } from 'react';
import { Footer } from '../../components/footer'
import SideBar from '../../components/sidebar'
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/navigation';
// import { isAuthenticated } from './utils/auth';
// import Login from './login/page'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <SideBar />
      {children}
      <Footer />

    </>
  );
}

