import { motion } from "motion/react";
import TechStack from "../components/TechStack";

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

const AboutMePage = () => {
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
    <div id="about-me" className="space-y-20 scroll-mt-35">
      <div className="flex item-center gap-5">
        <p className="text-3xl flex items-center">
          <span className="text-primary">/</span>
          <span>about-me</span>
        </p>
        <div className="grow mt-5">
          <div className="h-0.5 bg-primary w-full sm:w-50 md:w-100" />
        </div>
      </div>

      <div className="grid min-[925px]:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-5 text-lg text-gray max-[925px]:text-center"
        >
          <p>
            I'm Piyush Negi, a Frontend Developer based in New Delhi, passionate
            about building modern, responsive web applications with React,
            Tailwind CSS, and Firebase. I enjoy creating clean, intuitive user
            experiences that work seamlessly across all devices.
          </p>

          <p>
            My journey into web development began with curiosity and quickly
            grew into a passion for creating digital products. Along the way,
            I've built projects ranging from authentication-based applications
            and interactive dashboards to AI-powered tools and browser games.
          </p>

          <p>
            I have experience working with modern frontend technologies,
            integrating APIs, managing application state, handling form
            validation, and deploying projects to production. I also work with
            tools like Git, GitHub, Figma, and Vite while following clean and
            maintainable coding practices.
          </p>

          <p>
            Currently, I'm expanding my skills in Node.js, Express, and MongoDB
            while actively seeking a Frontend Developer role where I can
            contribute, learn, and grow as a developer.
          </p>
        </motion.div>
        <div className="relative max-h-100 max-w-100 shadow shadow-primary overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl max-[925px]:mx-auto min-[925px]:ml-auto">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <img src="/project-avatar.jpeg" alt="" />
        </div>
      </div>

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
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {data.stack.map((stackData) => (
                <motion.span
                  drag
                  dragConstraints={{
                    left: -130,
                    right: 130,
                    top: -40,
                    bottom: 40,
                  }}
                  dragElastic={0.2}
                  key={stackData}
                  variants={item}
                  className="border cursor-grab active:cursor-grabbing border-gray/50 px-2 py-1 rounded-2xl text-sm"
                >
                  {stackData}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      <TechStack></TechStack>
    </div>
  );
};

export default AboutMePage;
