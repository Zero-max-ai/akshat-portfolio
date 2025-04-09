import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center py-6 text-sm text-gray-500">
      <p>© 2025 Akshat Gangi</p>
      <div className="flex justify-center gap-4 mt-2">
        <Link to={"https://github.com/Zero-max-ai"} target={"_blank"} rel="noopener noreferrer">GitHub</Link>
        <Link to={"https://linkedin.com/in/akshat-gangi-b457a61ab/"} target={"_blank"} rel="noopener noreferrer">LinkedIn</Link>
      </div>
    </footer>
  )
}

export default Footer;
