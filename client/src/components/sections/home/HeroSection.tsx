import Button from '../../../components/Button'
import DownloadIcon from '../../../assets/Download';
import GithubIcon from '../../../assets/Github'

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-[32px] items-center justify-center">
      <h1 className="font-extrabold text-[40px] max-md:text-[20px]">Hi, My name is Akshat Gangi.</h1>
      <span className="font-thin text-[20px] max-md:text-[16px] max-w-[700px] text-center">
        A developer and analyst based in New Delhi. Currently working on rust based cli script and learning Japanese as my third speaking language.
      </span>
      <div className="flex gap-14">
        <Button
          to={''}
          title={'Resume'}
          Icon={DownloadIcon}
        />
        <Button
          to={'https://github.com/Zero-max-ai/'}
          title={'Github'}
          Icon={GithubIcon}
        />
      </div>
    </div>
  )
}

export default HeroSection;
