// src/components/Layout.tsx
import { Outlet } from 'react-router';
import Navbar from './Navbar'; 
import Footer from './Footer';

export default function Layout() {
  return (
    /* We didn't define appContainer specifically, but body handles most of it. 
       Adding 'min-h-screen flex flex-col' ensures the footer stays at the bottom. */
    <div className="min-h-screen flex flex-col">
      <header className="layout-header">
        <Navbar /> 
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
