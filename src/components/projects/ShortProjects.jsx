import AnimatedButton from "../AnimatedButton";
import { motion } from "motion/react";

const ShortProjects = ({ container, item }) => {
  const shortProjectsData = [
    {
      stack: "REACT, VITE, TAILWIND CSS, FIREBASE, FORMIK, YUP, VERCEL",
      description:
        "Contact App is a real-time contact management app that lets users add, edit, delete, and search through their contacts. All data is synced live with Firebase Firestore, with form validation and toast notifications for a smooth, feedback-rich experience.",
      name: "Contact App",
      link: "https://contact-app-react-coral.vercel.app/",
    },
    {
      stack: "HTML, CSS, JAVASCRIPT, NODE.JS, EXPRESS, GEMINI API, VERCEL",
      description:
        "AI Chat App is a full-stack chatbot application powered by Google's Gemini API. Users can send messages and receive AI-generated responses with markdown rendering support. The Express backend handles API communication, basic request validation, and rate limiting, while the frontend delivers a clean and minimal chat interface.",
      name: "AI Chat App",
      link: "https://ai-chat-app-delta-black.vercel.app/",
    },
    {
      stack: "REACT, VITE, CSS, VERCEL",
      description:
        "BMI Calculator is a simple and clean tool that calculates your Body Mass Index based on your height and weight. It instantly displays your BMI value along with your health category — Underweight, Normal, Overweight, or Obese — in a minimal, easy-to-use interface.",
      name: "BMI Calculator",
      link: "https://bmi-calculator-psi-tan.vercel.app/",
    },
  ];

  return (
    <div className="space-y-20">
      <div className="flex item-center gap-5">
        <p className="text-3xl flex items-center">
          <span className="text-primary">#</span>
          <span>Small Projects</span>
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
                <a target="_blank" rel="noreferrer" href={data.link}>
                  <AnimatedButton
                    variants={item}
                    className={
                      "cursor-pointer rounded-lg border-2 hover:text-primary hover:border-white transition-colors border-primary p-2"
                    }
                  >
                    <span>Live {"<-->"}</span>
                  </AnimatedButton>
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ShortProjects;
