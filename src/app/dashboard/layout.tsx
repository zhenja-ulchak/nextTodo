'use client';
import React from 'react';
import { Footer } from '../../components/footer'
import SideBar from '../../components/sidebar'



export default function DashboardLayout({
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

