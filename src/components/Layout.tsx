// src/components/Layout.tsx
import { Outlet, ScrollRestoration } from 'react-router'; 
import Navbar from './Navbar'; 
// 1. Change to a standard static import
import Footer from './Footer'; 

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollRestoration /> 

      <header className="layout-header">
        <Navbar /> 
      </header>

      {/* 2. flex-1 ensures this area fills the gap, keeping footer at bottom */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* 3. Render it directly without Suspense */}
      <Footer />
    </div>
  );
}
