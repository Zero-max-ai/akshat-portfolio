import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-[100vh]">
      <Navbar />
      
      <main className="w-2/3 mx-auto pt-52">
        <div className="">
          <Outlet />
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Layout;
