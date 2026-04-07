// src/App.tsx
import { lazy, Suspense } from 'react'; // 1. Import lazy and Suspense
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// 2. Replace static imports with lazy imports
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Services = lazy(() => import('./routes/Services'));
const Blog = lazy(() => import('./routes/Blog'));
const BlogPost = lazy(() => import('./routes/BlogPost'));
const Contact = lazy(() => import('./routes/Contact'));

// 3. Wrap elements in <Suspense>
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="loading-spinner" />}>
        <Layout />
      </Suspense>
    ), 
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "blog", element: <Blog /> },
      { path: ":slug", element: <BlogPost /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTop />
    </>
  );
}
