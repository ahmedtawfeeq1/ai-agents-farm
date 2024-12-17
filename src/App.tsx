import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Navigation from "./components/ui/navigation";
import { motion } from "framer-motion";

/* @ts-ignore */
import routes from "~react-pages";

function ModernLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <motion.div
        className="relative flex items-center justify-center w-16 h-16"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Spinner Circle */}
        <div className="absolute w-full h-full border-4 border-t-blue-500 border-gray-200 rounded-full"></div>
      </motion.div>

      {/* Text Below Spinner */}
      <motion.p
        className="mt-4 text-lg font-semibold text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Loading, please wait...
      </motion.p>
    </div>
  );
}

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
