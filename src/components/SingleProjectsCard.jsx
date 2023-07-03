import { Link } from "react-router-dom";

const SingleProjectsCard = ({ project }) => {
  const { id, projectName, images, tools } = project;
  //   const { tools } = project;
  return (
    <section className="body-font">
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap -m-4">
          <div className="p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img src={images} alt="" />
              <h2 className="text-lg text-gray-900 font-medium title-font mt-2">
                {projectName}
              </h2>
              <p className="leading-relaxed text-base">
                {tools.map((tool, index) => (
                  <span key={index}>
                    {tool}
                    {index !== tools.length - 1 && " | "}
                  </span>
                ))}
              </p>
              <div className="flex items-center justify-center mt-5">
                <Link to={`/details/${id}`}>
                  <button className="text-black hover:bg-white hover:border bg-amber-300 border border-gray-300 font-medium transition duration-300 rounded-md px-3 py-3">
                    Project Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProjectsCard;
