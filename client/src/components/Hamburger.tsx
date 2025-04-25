import useMenuStore from '../store/menu';

const Hamburger = () => {
  const { menu, toggleMenu } = useMenuStore();
  return (
    <div className="md:hidden flex flex-col gap-[1px] cursor-pointer" onClick={toggleMenu}>
      <span className="block bg-black dark:bg-white w-[36px] h-[6px]" />
      <span className={`
        ${menu ? 'translate-x-[18px]' : '-translate-x-[0px]'}
        block bg-black dark:bg-white w-[18px] h-[6px] transition-all duration-300 ease-in-out`}
      />
      <span className="block bg-black dark:bg-white w-[36px] h-[6px]" />
    </div>
  )
}

export default Hamburger;
