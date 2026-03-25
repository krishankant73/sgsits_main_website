import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { PageLoader } from './components/PageLoader';
import { router } from './routes';

export default function App() {
  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <PageLoader />
      <RouterProvider router={router} />
    </>
  );
}
