import { Link } from 'react-router-dom';

import Heading from '../../Heading';
import { mySkillSet} from '../../../utils/index';

const ProjectSection = () => {
  return (
    <div id={"about-me"} className="flex flex-col gap-[32px] items-center justify-center">
      <Heading head={'About Me'} />
      <div className="flex flex-col justify-between gap-10 max-w-[700px]">
        <div className="font-thin flex flex-col gap-3">
          <span>
            Hi, my name is <b>Akshat Gangi</b>. A passionate data analyst, full stack developer based in New Delhi. Currently building <b>rust</b> scripting automation tasks.
          </span>
          <span>
            Outside of tech I like to enjoy <b>outdoor activities</b>, watching <b>animes</b>, learning different <b>languages</b> and different <b>exploring cultures</b>.
          </span>
          <span>
            Currently enrolled in <b>Data Science</b> course from Internshala where I am learning hands-on experience related to real-world Data Science use. And I am a graduated from Jagan Institute of Management Studies where I have completed my <b>Bachelor in Computer Application in Data Science</b>.
          </span>
        </div>
        <div>
          <h1>My Skill Set</h1>
          <div className="flex flex-wrap gap-3 font-thin">
            { mySkillSet.map((value, index) => <span key={index}>{value}</span>) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection;
