import Heading from '../../Heading';
import { mySkillSet } from '../../../utils/index'

const AboutMe = () => {
  return (
    <div>
      <Heading head={'AboutMe'} />

      <div className="flex items-center justify-between">
        <div>
          <span>
            Hi, my name is <b>Akshat Gangi</b>. A passionate data analyst, full stack developer based in New Delhi. Currently building <b>rust</b> scripting automation tasks.
          </span>
          <span>
            Outside of tech I like to enjoy <b>outdoor activities</b>, watching <b>animes</b>, learning different <b>languages</b> and different <b>exploring cultures</b>.
          </span>
          <span>
            Currently enrolled in <b>Data Science</b> course from Internshala where I am learning hands-on experience related to real-world Data Science use. And I am a graduated from Jagan Institute of Management Studies where I have completed my <b>Bachelor in Computer Application in Data Science</b>.</span>
        </div>
        <div>
          <h1 className="font-extrabold">My Skill Set</h1>
          <ul>
            { mySkillSet.map((item, index) => <li key={index}>{item}</li>) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
