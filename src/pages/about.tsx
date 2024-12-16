import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  GraduationCap,
  Zap,
  RefreshCw,
  CheckCircle,
} from "lucide-react";

// Steps with details and outcomes
const steps = [
  {
    week: "Week 1",
    title: "Gap Analysis & Roadmap Setup",
    description:
      "Analyze your current tasks, pinpoint gaps, and create a customized roadmap tailored to your needs. You'll walk away with a detailed checklist to implement AI and automation efficiently.",
    icon: <BarChart className="h-10 w-10 text-blue-600" />,
    outcomes: [
      "Personalized AI implementation strategy",
      "Task automation priority list",
      "ROI calculation framework",
    ],
  },
  {
    week: "Week 2",
    title: "Build Knowledge Agents",
    description:
      "Build your personal Knowledge Agents to assist with analysis, reporting, and documentation. These tools empower you to automate similar tasks independently.",
    icon: <GraduationCap className="h-10 w-10 text-green-600" />,
    outcomes: [
      "Custom AI research assistant",
      "Automated report generation",
      "Smart documentation system",
    ],
  },
  {
    week: "Week 3",
    title: "Create Action Agents",
    description:
      "Develop AI Assistants to automate tasks in tools like Google Sheets, Gmail, Calendar, and WhatsApp. Streamline your workflows effortlessly.",
    icon: <Zap className="h-10 w-10 text-yellow-500" />,
    outcomes: [
      "Email management automation",
      "Calendar optimization system",
      "Workflow integration blueprints",
    ],
  },
  {
    week: "Week 4",
    title: "Integrate Automation Workflows",
    description:
      "Integrate everything—Knowledge Agents, AI Assistants, and automations—into seamless systems to unlock maximum productivity.",
    icon: <RefreshCw className="h-10 w-10 text-red-600" />,
    outcomes: [
      "End-to-end automated workflows",
      "Performance monitoring dashboard",
      "Continuous improvement framework",
    ],
  },
];

const EnhancedCoachingJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Content */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              4-Week AI Mastery Program.
            </span>
            <h1 className="text-5xl font-bold leading-tight">
              Master AI Agents & <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Transform Your Workflow!
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Unlock productivity and gain clarity through our personalized coaching journey.
              Let AI Agents work for you, so you focus on what matters most.
            </p>
            <div className="flex gap-4">
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
                onClick={() => window.location.href = "https://wa.me/+201288493425"}
              >
                Start Now! 🚀
              </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition" onClick={() => window.location.href = "https://www.facebook.com/share/p/15hK4hvtr6/"}>
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right: Interactive Visual */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg shadow-md cursor-pointer ${
                      activeStep === index
                        ? "bg-blue-100 border-2 border-blue-600"
                        : "bg-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {step.icon}
                      <span className="font-semibold">{step.week}</span>
                    </div>
                    <h3 className="text-sm font-bold">{step.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Coaching Journey */}
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Your Agentic AI Coaching Journey!</h2>
          <p className="text-lg text-gray-600">
            A step-by-step path to mastering AI agents and automation workflows.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl bg-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-start gap-6">
                {step.icon}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <ul className="mt-4 space-y-2">
                    {step.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-green-500" />
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating CTA */}
      <motion.div
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
          onClick={() => window.location.href = "https://wa.me/+201288493425"}
        >
          Book Your Spot 🚀
        </button>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2025 Ahmed Tawfeeq, AI & Automation Specialist. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default EnhancedCoachingJourney;