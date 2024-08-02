import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className='bg-primary text-white min-h-screen'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
