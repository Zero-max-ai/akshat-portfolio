import { Link } from 'react-router-dom';
import useMenuStore from '../store/menu';

const MobNavigation = () => {
  const { toggleMenu } = useMenuStore();
  return (
    <div className="md:hidden absolute top-[2.8em] left-0 h-[100vh] w-full bg-[#fafafa] dark:bg-[#1E2125] flex flex-col items-center justify-center z-20 gap-10">
      <div className="flex flex-col items-center justify-center gap-10"> 
        <a href='#projects' className="md:hidden font-thin" onClick={toggleMenu}>Projects</a>
        <a href='#about-me' className="md:hidden font-thin" onClick={toggleMenu}>About</a>
        <Link to={''} className="md:hidden font-thin" onClick={toggleMenu}>Resume</Link>
        <Link to={'/404-me'} className="md:hidden font-thin" onClick={toggleMenu}>404 Me</Link>
      </div>
    </div>
  )
}

export default MobNavigation;
