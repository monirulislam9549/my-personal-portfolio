import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import GetInTouch from "../../components/GetInTouch";
import ProjectsCard from "../../components/ProjectsCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProjectsCard></ProjectsCard>
      <GetInTouch></GetInTouch>
      <Contact></Contact>
    </div>
  );
};

export default Home;
