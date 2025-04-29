import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  title: string;
  Icon: React.ElementType;
}

const Button: React.FC<ButtonProps> = ({to, title, Icon}) => {
  return (
    <Link
      to={to}
      className="w-fit shadow-light dark:shadow-dark font-thin flex items-center gap-[10px] px-3 py-1 rounded-sm">
      {title} <Icon />
    </Link>

  )
}

export default Button;
