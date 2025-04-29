type HeadingProps = {
  head: string;
  style?: string;
}

const Heading: React.FC<HeadingProps> = ({ head, style }) => {
  return (
    <h1 className={`${style ? style : "text-[40px] font-extrabold"} w-[505px] max-md:w-full max-md:text-[24px]`}>{head}</h1>
  )
}

export default Heading;
