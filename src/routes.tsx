import HomeEN from "./pages/en/home";
import AboutEN from "./pages/en/about";
import AgentsListEN from "./pages/en/agents/list";

import HomeAR from "./pages/ar/home";
import AboutAR from "./pages/ar/about";
import AgentsListAR from "./pages/ar/agents/list";

const routes = [
  { path: "/", element: <HomeEN /> },
  { path: "/en/about", element: <AboutEN /> },
  { path: "/en/agents/list", element: <AgentsListEN /> },
  { path: "/ar", element: <HomeAR /> },
  { path: "/ar/about", element: <AboutAR /> },
  { path: "/ar/agents/list", element: <AgentsListAR /> },
];

export default routes;

