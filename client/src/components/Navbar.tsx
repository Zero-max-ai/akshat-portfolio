import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="py-4 border">
      <div className="w-3/5 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to={"/"} className="font-semibold">AkshatGangi</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/about"}>About</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to={"https://www.linkedin.com/in/akshat-gangi-b457a61ab/"}
            target={"_blank"} rel="noopener noreferrer"
            className="hover:bg-[#e9eaeb] shadow-[2px_2px_0px_#e0e0d8] duration-300 transition-all ease-in-out px-2 py-1 rounded-sm">
            Contact
          </Link>
          <Link to={""} className="bg-blue-500 hover:bg-[#1d4ed8] text-white px-2 py-1 rounded-sm shadow-[2px_2px_0px_#1d4ed8] transition-all ease-in-out">Resume</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
