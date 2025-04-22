import { Link } from 'react-router-dom';

import Heading from '../../Heading';
import { mySkillSet} from '../../../utils/index';

const CurrentProject = () => {
  return (
    <div className="flex flex-col gap-[32px] items-center justify-center">
      <Heading head={'Current Working Project'} />
      <div className="font-thin flex flex-col gap-3 max-w-[700px]">
        <span>
          So, currently I am working on building 2 project simultaneously,
        </span>
        <span>
          1.) Rust based OS kernel, to understand the inline working and grasp that actually a low level based working system actually work and may get expand that project in future.
        </span>
        <span>
          2.) HomeoAnalysis is a user-friendly site which allows anyone to upload a dataset and instantly visualize insights through interactive graphs. It’s built to help beginners, analysts or even non-tech users to explore the data without write a single line of code.
        </span>
      </div>
    </div>
  )
}

export default CurrentProject;
