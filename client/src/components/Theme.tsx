import useThemeStore from '../store/theme';
import Sun from '../assets/Sun.svg';
import Moon from '../assets/Moon.svg';

const Theme = () => {
  const { theme, themeToggle } = useThemeStore();
  return (
    <div className="cursor-pointer" onClick={themeToggle}>
      <img src={theme === 'light' ? Sun : Moon} />
    </div>
  )
}

export default Theme;
