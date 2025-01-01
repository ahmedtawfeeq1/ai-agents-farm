import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Navigation, { LanguageProvider } from "./components/ui/navigation";
import ModernLoader from "./components/ui/ModernLoader";

/* @ts-ignore */
import routes from "~react-pages";

function App() {
  return (
    <LanguageProvider>
      <div>
        <Navigation />
        <Suspense fallback={<ModernLoader />}>
          {useRoutes(routes)}
        </Suspense>
      </div>
    </LanguageProvider>
  );
}

export default App;
