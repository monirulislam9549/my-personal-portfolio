import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const {
    projectName,
    tools,
    projectDescription,
    projectImages,
    githubClient,
    githubServer,
    liveLink,
  } = data || {};

  useEffect(() => {
    fetch(`/projects.json`)
      .then((res) => res.json())
      .then((data) => {
        const unique = data.find((match) => match.id == id);
        setData(unique);
      });
  }, [id]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-1/2 text-center">
        <Carousel autoPlay={true} interval={1500} infiniteLoop={true}>
          {projectImages?.map((image) => (
            <img key={image} src={image} alt="" />
          ))}
        </Carousel>
      </div>

      <div className="md:w-1/2 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4">
              <div className="bg-gray-100 p-6 rounded-lg space-y-3">
                <iframe
                  className="w-full h-[320px] overflow-hidden"
                  src={liveLink}
                ></iframe>
                <h2 className="text-lg text-gray-900 font-medium title-font mt-2">
                  {projectName}
                </h2>
                <p className="leading-relaxed text-base">
                  {tools?.map((tool, index) => (
                    <span key={index}>
                      {tool}
                      {index !== tools.length - 1 && " | "}
                    </span>
                  ))}
                </p>
                <p>{projectDescription}</p>
                <div className="flex space-x-3 mt-4">
                  <a
                    className="text-blue-600 font-semibold"
                    href={githubClient}
                  >
                    GitHub Client |
                  </a>

                  <a
                    className="text-blue-600 font-semibold"
                    href={githubServer}
                  >
                    GitHub Server |
                  </a>

                  <a className="text-blue-600 font-semibold" href={liveLink}>
                    Live Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
