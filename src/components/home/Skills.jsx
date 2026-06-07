import SkillsCloud from "../SkillsCloud";
import { motion } from "motion/react";

const containerVariants = {
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

const badgeVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Skills = () => {
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
    },
    {
      h: "🛠️ Tools & Workflow",
      stack: ["Git", "GitHub", "VS Code", "Figma", "npm", "Vite"],
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
    },
    {
      h: "📚 Learning Next",
      stack: ["Node.js", "Express.js", "MongoDB"],
    },
  ];

  return (
    <div id="skills" className="space-y-20 scroll-mt-35">
      <p className="text-3xl flex items-center">
        <span className="text-primary">#</span>
        <span>skills</span>
        <span className="h-0.5 mt-2 ml-5 bg-primary w-full sm:w-50 md:w-100"></span>
      </p>

      <div className="grid md:grid-cols-[0.75fr_1.25fr] gap-10 items-start">
        <SkillsCloud />
        <div className="columns-2 gap-5">
          {skillsData.map((data) => (
            <div
              key={data.h}
              className="rounded-xl shadow shadow-primary/40 border border-primary/50 mb-5 break-inside-avoid hover:shadow-primary hover:border-primary transition-all duration-300"
            >
              <p className="border-b border-primary/30 px-3 py-2 font-semibold">
                {data.h}
              </p>

              <motion.div
                className="text-gray p-3 flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {data.stack.map((stackData) => (
                  <motion.span
                    key={stackData}
                    variants={badgeVariants}
                    className="border border-gray/50 px-2 py-1 rounded-2xl text-sm"
                  >
                    {stackData}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
