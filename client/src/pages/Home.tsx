import HeroSection from '../components/sections/home/HeroSection';
import ProjectSection from '../components/sections/home/ProjectSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <hr className="my-40" />
      <ProjectSection />
      <hr className="my-40" />
    </div>
  )
}

export default Home;
