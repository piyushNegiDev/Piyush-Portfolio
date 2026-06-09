import { Fragment } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";
import TechStack from "../TechStack";

const container = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const SkillsSection = () => {
  const skillsData = [
    {
      h: "⚛️ Frontend Development",
      stack: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
      time: 2000,
    },
    {
      h: "🛠️ Tools & Workflow",
      stack: ["Git", "GitHub", "VS Code", "Figma", "npm", "Vite"],
      time: 2500,
    },
    {
      h: "🔥 Firebase & Integration",
      stack: [
        "Firebase Authentication",
        "Firestore Database",
        "REST APIs",
        "Form Validation",
        "CRUD Operations",
      ],
      time: 3000,
    },
    {
      h: "📚 Learning Next",
      stack: ["Node.js", "Express.js", "MongoDB"],
      time: 3500,
    },
  ];

  return (
    <div id="" className="space-y-5 scroll-mt-35">
      <p className="text-2xl flex items-center">
        <span className="text-primary">#</span>
        <span>skills</span>
        <span className="h-0.5 mt-2 ml-5 bg-primary w-full sm:w-50 md:w-100"></span>
      </p>

      <div className="columns-2 gap-5">
        {skillsData.map((data) => (
          <Fragment key={data.h}>
            <Tilt>
              <div className="rounded-xl shadow shadow-primary/40 border border-primary/50 mb-5 break-inside-avoid hover:shadow-primary hover:border-primary transition-all duration-300">
                <p className="border-b border-primary/30 px-3 py-2 font-semibold">
                  {data.h}
                </p>

                <motion.div
                  className="text-gray p-3 flex flex-wrap gap-2"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <TechStack stack={data.stack} item={item} time={data.time} />
                  {/* {data.stack.map((stackData) => (
                      <motion.span
                        key={stackData}
                        variants={item}
                        className="border border-gray/50 px-2 py-1 rounded-2xl text-sm"
                      >
                        {stackData}
                      </motion.span>
                    ))} */}
                </motion.div>
              </div>
            </Tilt>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
