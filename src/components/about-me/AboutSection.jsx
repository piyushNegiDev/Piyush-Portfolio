import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <>
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
    </>
  );
};

export default AboutSection;
