type HeadingProps = {
  head: string;
}

const Heading = (props : HeadingProps) => {
  return (
    <h1 className="w-[505px] max-md:w-full font-extrabold text-[40px] max-md:text-[24px]">{props.head}</h1>
  )
}

export default Heading;
