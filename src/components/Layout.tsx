// src/components/Layout.tsx
import { lazy, Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router'; 
import Navbar from './Navbar'; 

const Footer = lazy(() => import('./Footer'));

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration /> 

      <header className="layout-header">
        <Navbar /> 
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* 
          FIX: Use a div with the same background color and height 
          as your footer to prevent the "jump" when it loads.
      */}
      <Suspense fallback={<div className="h-[160px] bg-[#5542ff] w-full" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
