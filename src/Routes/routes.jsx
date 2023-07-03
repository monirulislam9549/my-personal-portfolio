import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import ProjectDetails from "../components/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "details/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: () => fetch("projects.json/details"),
      },
    ],
  },
]);

export default router;
