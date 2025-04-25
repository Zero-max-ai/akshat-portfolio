import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  title: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({to, title, icon}) => {
  return (
    <Link
      to={to}
      className="w-fit shadow-light dark:shadow-dark font-thin flex items-center gap-[10px] px-3 py-1 rounded-sm">
      {title} <img src={icon} />
    </Link>

  )
}

export default Button;
