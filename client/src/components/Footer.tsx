import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-2 pb-4 max-md:pb-10">
      <div className="w-2/3 mx-auto flex items-center justify-center font-thin">
        <span>
          <Link to={''} target={"_blank"} className="underline underline-offset-4">Resume</Link> /{" "}
          <Link to={'mailto:gangi.keshav03@gmail.com'} target={"_blank"} className="underline underline-offset-4">Mail</Link> /{" "}
          <Link to={'https://www.linkedin.com/in/akshat-gangi-b457a61ab/'} target={"_blank"} className="underline underline-offset-4">LinkedIn</Link> /{" "}
          <Link to={'https:/github.com/Zero-max-ai'} target={"_blank"} className="underline underline-offset-4">Github</Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer;
