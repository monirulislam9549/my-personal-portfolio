import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import ProjectsCard from "../../components/ProjectsCard";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProjectsCard></ProjectsCard>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default Home;
