import { Link } from 'react-router-dom';
import Sun from '../assets/Sun.svg';
import Moon from '../assets/Moon.svg';
import useThemeStore from '../store/theme';
import useMenuStore from '../store/menu';
import Hamburger from './Hamburger';
import MobNavigation from './MobNavigation';

const Navbar = () => {
  const { menu } = useMenuStore();
  const { theme, themeToggle } = useThemeStore();
  return (
    <header className="fixed top-0 left-0 w-full py-2 border-b border-dashed backdrop-blur-md">
      <div className="max-md:w-11/12 w-2/3 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10 text-lg"> 
          <h1 className="">
            <Link to={'/'} className="flex items-center gap-2 font-extrabold">
              Akshat Gangi
            </Link>
          </h1>
          <a href='#projects' className="max-md:hidden font-thin">Projects</a>
          <a href='#about-me' className="max-md:hidden font-thin">About</a>
          <Link to={''} className="max-md:hidden font-thin">Resume</Link>
          <Link to={'/404-me'} className="max-md:hidden font-thin">404 Me</Link>
        </div>
        <div className="max-md:hidden cursor-pointer" onClick={themeToggle}>
          <img src={theme === 'light' ? Sun : Moon} />
        </div>
        <Hamburger />
        { menu && <MobNavigation /> }
      </div>
    </header>
  )
}

export default Navbar;
