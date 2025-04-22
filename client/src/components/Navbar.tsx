import { Link } from 'react-router-dom';
import Sun from '../assets/Sun.png'

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full py-2">
      <div className="w-2/3 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10 text-lg"> 
          <h1>
            <Link to={'/'} className="font-extrabold">
              Akshat Gangi
            </Link>
          </h1>
          <a href='#projects' className="font-thin">Projects</a>
          <a href='#about-me' className="font-thin">About</a>
          <Link to={''} className="font-thin">Resume</Link>
          <Link to={'/404-me'} className="font-thin">404 Me</Link>
        </div>
        <div className="cursor-pointer">
          <img src={Sun} />
        </div>
      </div>
    </header>
  )
}

export default Navbar;
