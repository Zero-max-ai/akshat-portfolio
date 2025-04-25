import { Link } from 'react-router-dom';
import Sun from '../assets/Sun.png';
import Moon from '../assets/Moon.png';
import useMenuStore from '../store/menu';
import useThemeStore from '../store/theme';

const MobNavigation = () => {
  const { toggleMenu } = useMenuStore();
  const { theme, themeToggle } = useThemeStore();
  return (
    <div className="md:hidden absolute top-[2.8em] left-0 h-[100vh] w-full bg-[#fafafa] dark:bg-[#1E2125] flex flex-col items-center justify-center z-20 gap-10">
      <div className="flex flex-col items-center justify-center gap-10"> 
        <a href='#projects' className="md:hidden font-thin" onClick={toggleMenu}>Projects</a>
        <a href='#about-me' className="md:hidden font-thin" onClick={toggleMenu}>About</a>
        <Link to={''} className="md:hidden font-thin" onClick={toggleMenu}>Resume</Link>
        <Link to={'/404-me'} className="md:hidden font-thin" onClick={toggleMenu}>404 Me</Link>
      </div>
      <div className="md:hidden cursor-pointer flex items-center gap-[8px] font-thin" onClick={() => { themeToggle(); toggleMenu()}}>
        <img src={theme === 'light' ? Sun : Moon} /> Theme
      </div>
    </div>
  )
}

export default MobNavigation;
