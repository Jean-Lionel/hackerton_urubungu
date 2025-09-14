import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
