import Heading from '../../components/Heading';
import { pixel_playground } from '../../utils/index'

const Pixel = () => {
  return (
    <div className="w-[700px] mx-auto pb-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <Heading head={"Project - Pixel Playground"} />
          <span className="font-thin">
            Pixel Playground is a web-based creative platform designed to empower
            users especially digital artists, designers, and hobbyists—to explore and
            manipulate pixel-based graphics interactively. The platform offers a 
            curated collection of image assets and tools, encouraging users to edit, 
            experiment and personalize visual content in a playful yet professional 
            environment.
          </span>
        </div>
        {
          pixel_playground.map(({title, content}) => {
            return (
              <div className="flex flex-col gap-2" key={title}>
                <Heading head={title} style={"text-[32px] font-semibold"} />
                <div className="flex flex-col gap-[2px] font-thin">
                {
                  content.map((value, idx)=> (
                    <span key={idx}>- {value}</span>
                  ))
                }
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Pixel;
