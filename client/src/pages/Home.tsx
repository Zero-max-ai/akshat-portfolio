import HeroSection from '../components/sections/home/HeroSection';
import ProjectSection from '../components/sections/home/ProjectSection';
import AboutMe from '../components/sections/home/AboutMe';
import CurrentProject from '../components/sections/home/CurrentProject';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <hr className="my-40" />
      <ProjectSection />
      <hr className="my-40" />
      <AboutMe />
      <hr className="my-40" />
      <CurrentProject />
      <hr className="mt-40 mb-10" />
    </div>
  )
}

export default Home;
