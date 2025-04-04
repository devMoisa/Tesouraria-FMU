import { Outlet } from 'react-router-dom';
import { NavBar } from './navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto py-4 px-4 sm:py-6 sm:px-6 lg:px-8 max-w-7xl">
        <Outlet />
      </main>
    </div>
  );
}