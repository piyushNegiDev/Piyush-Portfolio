import AnimatedButton from "../AnimatedButton";
import { motion } from "motion/react";
import PulseAnimation from "../PulseAnimation";
import { FaGithub } from "react-icons/fa";

const ShortProjects = ({ container, item }) => {
  const shortProjectsData = [
    {
      stack: "REACT, VITE, TAILWIND CSS, FIREBASE, FORMIK, YUP, VERCEL",
      description:
        "A real-time contact management app to add, edit, delete, and search contacts. Data is synced live with Firebase Firestore, with form validation and toast notifications.",
      name: "Contact App",
      link: "https://contact-app-react-coral.vercel.app/",
      githubLink: "https://github.com/piyushNegiDev/ContactApp-React",
    },
    {
      stack: "HTML, CSS, JAVASCRIPT, NODE.JS, EXPRESS, GEMINI API, VERCEL",
      description:
        "A full-stack chatbot powered by Google's Gemini API. Supports markdown rendering, with an Express backend handling API communication, request validation, and rate limiting.",
      name: "AI Chat App",
      link: "https://ai-chat-app-delta-black.vercel.app/",
      githubLink: "https://github.com/piyushNegiDev/AI-Chat-App",
    },
    {
      stack: "REACT, VITE, CSS, VERCEL",
      description:
        "A simple tool that calculates Body Mass Index based on height and weight, instantly displaying the value along with a health category in a minimal interface.",
      name: "BMI Calculator",
      link: "https://bmi-calculator-psi-tan.vercel.app/",
      githubLink: "https://github.com/piyushNegiDev/BMI-Calculator",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex item-center gap-5">
        <p className="text-2xl flex items-center">
          <span className="text-primary">#</span>
          <span>small-projects</span>
        </p>
        <div className="grow mt-5">
          <div className="h-0.5 bg-primary w-full sm:w-50 md:w-100" />
        </div>
      </div>

      <motion.div className="grid grid-cols-[repeat(auto-fit,minmax(335px,1fr))] gap-5">
        {shortProjectsData.map((data) => {
          return (
            <motion.div
              key={data.name}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="border border-gray shadow shadow-primary/50 hover:shadow-md rounded-xl overflow-hidden hover:shadow-primary hover:border-primary"
            >
              <div className="border-b border-gray">
                <motion.p variants={item} className="text-gray p-2">
                  {data.stack}
                </motion.p>
              </div>
              <div className="space-y-5 p-4">
                <motion.h2
                  variants={item}
                  className="text-2xl font-semibold flow-text"
                >
                  {data.name}
                </motion.h2>
                <motion.p variants={item} className="text-gray">
                  {data.description}
                </motion.p>
                <div className="flex gap-5">
                  <a target="_blank" rel="noreferrer" href={data.link}>
                    <AnimatedButton
                      variants={item}
                      className={
                        "cursor-pointer rounded-lg border-2 hover:text-primary hover:border-white transition-colors border-primary p-2"
                      }
                    >
                      <span className="flex gap-2 items-center">
                        <PulseAnimation className={"rounded-full h-3 w-3"} />{" "}
                        Live
                      </span>
                    </AnimatedButton>
                  </a>
                  <a target="_blank" rel="noreferrer" href={data.githubLink}>
                    <AnimatedButton
                      variants={item}
                      className={
                        "cursor-pointer rounded-lg border-2 hover:text-primary hover:border-white transition-colors border-primary p-2"
                      }
                    >
                      <span className="flex gap-2 items-center">
                        <FaGithub /> Code
                      </span>
                    </AnimatedButton>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ShortProjects;
