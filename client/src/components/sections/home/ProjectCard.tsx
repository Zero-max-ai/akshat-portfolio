import { Link } from 'react-router-dom';

import ExternalLink from '../../../assets/ExternalLink'
import Github from '../../../assets/Github';
import useThemeStore from '../../../store/theme';

type ProjectCard = {
  image: string;
  title: string;
  titleLink: string;
  githubLink: string;
  style: boolean;
}

const ProjectCard = ( props: ProjectCard ) => {
  const { theme } = useThemeStore();
  return (
    <div
      className={`${props.style ? "w-[700px] flex items-center" : "w-[300px]"} ${theme === 'light' ? 'bg-white' : 'bg-black'}
      max-md:flex-col max-md:items-start max-md:w-[300px] rounded-xl overflow-hidden`}>
      <img src={props.image} alt={props.title + '.png'} className={`${props.style ? "w-1/2" : "w-full"} max-md:w-full object-cover`} />
      <div className="flex flex-col gap-3 cabinet font-extrabold py-14 px-7">
        <Link to={`/project/${props.titleLink}`} className="flex items-center gap-[8px]">{props.title} <ExternalLink /></Link>
        <Link to={props.githubLink} className="flex items-center gap-[8px]">Github <Github /></Link>
      </div>
    </div>
  )
}

export default ProjectCard;
