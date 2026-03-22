// src/components/Layout.tsx
import { lazy, Suspense } from 'react'; // Add lazy and Suspense
import { Outlet } from 'react-router';
import Navbar from './Navbar'; 

// 1. Lazy load the Footer
const Footer = lazy(() => import('./Footer'));

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="layout-header">
        <Navbar /> 
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* 2. Wrap Footer in Suspense */}
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
