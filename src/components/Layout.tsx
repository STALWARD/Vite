// src/components/Layout.tsx
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar'; 

/**
 * Optimization: Lazy load the Footer.
 * This removes the Footer's JS (and its icon libraries) from the initial 
 * critical bundle, reducing "Script Evaluation" time.
 */
const Footer = lazy(() => import('./Footer'));

export default function Layout() {
  return (
    /* 'min-h-screen flex flex-col' ensures the footer stays at the bottom even on short pages */
    <div className="min-h-screen flex flex-col">
      <header className="layout-header">
        {/* Navbar stays as a static import because it's needed immediately for LCP */}
        <Navbar /> 
      </header>

      <main className="flex-1">
        {/* Outlet renders the lazy-loaded routes defined in App.tsx */}
        <Outlet />
      </main>
      
      {/* 
        Suspense allows the rest of the page to be interactive while the footer loads.
        We use null as a fallback because the footer is off-screen initially.
      */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
