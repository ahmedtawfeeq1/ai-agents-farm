import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Navigation from "./components/ui/navigation";
import ModernLoader from "./components/ui/ModernLoader";

/* @ts-ignore */
import routes from "~react-pages";

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<ModernLoader />}>
        {useRoutes(routes)}
      </Suspense>
    </div>
  );
}

export default App;
