import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Navigation from "./components/ui/navigation";

/* @ts-ignore */
import routes from "~react-pages";

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        {useRoutes(routes)}
      </Suspense>
    </div>
  );
}

export default App;