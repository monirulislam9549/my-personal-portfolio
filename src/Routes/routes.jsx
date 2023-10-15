import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";

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
        path: "details/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: () => fetch("projects.json/details"),
      },
    ],
  },
]);

export default router;
