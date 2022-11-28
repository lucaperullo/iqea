import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
//import data from assets/data.json";
import data from "../../../public/assets/data.json";
export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home qea={data} />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
