import { Outlet } from 'react-router-dom';
import DriverStandings from'../component/homepageinfo'
import NavigationMenu from './navigationbar';

const Layout = () => {
  return (
    <div>
      <NavigationMenu />
      <DriverStandings />
      <Outlet />
    </div>
  );
};

export default Layout;
