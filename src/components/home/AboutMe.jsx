import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import AnimatedButton from "../AnimatedButton";

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div id="about-me" className="space-y-20 scroll-mt-35">
      <div className="flex item-center gap-5">
        <p className="text-3xl flex items-center">
          <span className="text-primary">#</span>
          <span>about-me</span>
        </p>
        <div className="grow mt-5">
          <div className="h-0.5 bg-primary w-full sm:w-50 md:w-100" />
        </div>
        <button
          className="cursor-pointer mt-2"
          onClick={() => {
            navigate("/about-me");
          }}
        >
          View all {"---->"}
        </button>
      </div>

      <div className="grid min-[925px]:grid-cols-2 gap-5 items-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-5 text-lg text-gray max-[925px]:text-center"
        >
          <p>
            I'm Piyush, a Frontend Developer specializing in React, Tailwind
            CSS, and Firebase. I enjoy building responsive, user-focused web
            applications that combine clean design with seamless functionality.
          </p>
          <p>
            I've worked on projects ranging from authentication-based
            applications to interactive dashboards, continuously expanding my
            skills in modern web development.
          </p>
          <p>
            Currently exploring full-stack development while actively seeking a
            Frontend Developer role where I can build impactful products and
            continue growing my skills.
          </p>
          <AnimatedButton
            onClick={() => {
              navigate("/about-me");
            }}
            className={
              "border-2 rounded-lg cursor-pointer max-[925px]:mx-auto min-[925px]:mr-auto hover:border-white hover:text-primary  border-primary text-white px-5 py-3 transition-colors"
            }
          >
            Read More !!
          </AnimatedButton>
        </motion.div>
        <div className="relative max-h-100 max-w-100 shadow shadow-primary overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl max-[925px]:mx-auto min-[925px]:ml-auto">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <img src="/project-avatar.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
