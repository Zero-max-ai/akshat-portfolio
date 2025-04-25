import { Link } from 'react-router-dom';

import Heading from '../../Heading';
import ProjectCard from './ProjectCard';
import DownloadPng from '../../../assets/Download.png';
import GithubPng from '../../../assets/Github.png';
import { projectDetails } from '../../../utils/index';


const ProjectSection = () => {
  return (
    <div id={'projects'} className="flex flex-col gap-[32px] items-center justify-center">
      <Heading head={'Projects'} />
      <div className="flex flex-wrap max-md:flex-col items-center justify-between gap-10 max-w-[700px]">
        {
          projectDetails.map(({image, title, titleLink, githubLink}, index: number) => {
            index++;
            return (
              <ProjectCard
                key={index}
                image={image}
                title={title}
                titleLink={titleLink}
                githubLink={githubLink}
                style={index % 3 == 0 ? true : false}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectSection;
