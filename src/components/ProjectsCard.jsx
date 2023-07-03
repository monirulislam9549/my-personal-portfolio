import { useEffect, useState } from "react";
import SingleProjectsCard from "./SingleProjectsCard";

const ProjectsCard = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = "projects.json";
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <SingleProjectsCard
            key={project.id}
            project={project}
          ></SingleProjectsCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
