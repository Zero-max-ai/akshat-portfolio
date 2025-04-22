import { Link } from 'react-router-dom';

import DownloadPng from '../../../assets/Download.png';
import GithubPng from '../../../assets/Github.png';

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-[32px] items-center justify-center">
      <h1 className="font-extrabold text-[40px]">Hi, My name is Akshat Gangi.</h1>
      <span className="font-thin text-[20px] max-w-[700px] text-center">
        A developer and analyst based in New Delhi. Currently working on rust based cli script and learning Japanese as my third speaking language.
      </span>
      <div className="flex gap-14">
        <Link
          style={{ boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
          to={''}
          className="font-thin flex items-center gap-[10px] px-3 py-1 rounded-sm">
          Resume <img src={DownloadPng} />
        </Link>
        <Link
          style={{boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)'}}
          to={'https://www.github.com/Zero-max-ai'}
          className="font-thin flex items-center gap-[10px] px-3 py-1 rounded-sm"
          target={"_blank"}>
          Github <img src={GithubPng} />
        </Link>
      </div>
    </div>
  )
}

export default HeroSection;
