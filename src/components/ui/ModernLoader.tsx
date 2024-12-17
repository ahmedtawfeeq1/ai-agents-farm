import { motion } from "framer-motion";

const ModernLoader = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Animated Loader Circle */}
      <motion.div
        className="h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      ></motion.div>

      {/* Modern Loading Text */}
      <motion.h2
        className="mt-6 text-xl font-semibold text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Preparing Awesomeness...
      </motion.h2>
    </div>
  );
};

export default ModernLoader;
