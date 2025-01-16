import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import AuthHeader from './Header/AuthHeader';
import DefaultHeader from './Header/DefaultHeader';
import { useAuth } from '@/store/useStore';

export default function MainLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      {isAuthenticated ? <AuthHeader /> : <DefaultHeader />}
      <Outlet />
      <Footer />
    </div>
  );
}
