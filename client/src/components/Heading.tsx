type HeadingProps = {
  head: string;
}

const Heading = (props : HeadingProps) => {
  return (
    <h1 className="w-[505px] font-extrabold text-[40px]">{props.head}</h1>
  )
}

export default Heading;
