// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Blog from './routes/Blog';
import BlogPost from './routes/BlogPost';
import Contact from './routes/Contact';
import ScrollToTop from './components/ScrollToTop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "blog", element: <Blog /> }, // List view at /blog
      { path: ":slug", element: <BlogPost /> }, // Slug view at /my-post (root level)
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTop /> {/* 2. Add it here */}
    </>
  );
}
