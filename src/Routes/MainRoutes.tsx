import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Components/Layout/Homelayout";

export const element = createBrowserRouter([
  {
    path: "",
    element: <Homelayout />,
  },
]);
