import HeroSection from '../components/sections/home/HeroSection';
import ProjectSection from '../components/sections/home/ProjectSection';
import AboutMe from '../components/sections/home/AboutMe';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <hr className="my-40" />
      <ProjectSection />
      <hr className="my-40" />
      <AboutMe />
    </div>
  )
}

export default Home;
