import AnimatedButton from "../AnimatedButton";
import { motion } from "motion/react";
import PulseAnimation from "../pulseAnimation";
import { FaGithub } from "react-icons/fa";

const GameProjects = ({ container, item }) => {
  const gameProjectsData = [
    {
      stack: "HTML, CSS, JAVASCRIPT, VERCEL",
      description:
        "A browser-based implementation of the classic number puzzle. Slide tiles to merge matching numbers and reach 2048, with score tracking and game-over detection, no frameworks.",
      name: "2048 Game",
      link: "https://2048-game-zeta-gold.vercel.app/",
      githubLink: "https://github.com/piyushNegiDev/2048-game",
    },
    {
      stack: "HTML, CSS, JAVASCRIPT, VERCEL",
      description:
        "A feature-rich card matching game across three difficulty levels, Easy (4*4), Medium (6*6), and Hard (8*8) with a preview timer, hint system, pause/resume, and best score tracking.",
      name: "Memory Game",
      link: "https://advance-memory-game.vercel.app/",
      githubLink: "https://github.com/piyushNegiDev/Advance-Memory-Game",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex item-center gap-5">
        <p className="text-2xl flex items-center">
          <span className="text-primary">#</span>
          <span>some-games</span>
        </p>
        <div className="grow mt-5">
          <div className="h-0.5 bg-primary w-full sm:w-50 md:w-100" />
        </div>
      </div>

      <motion.div className="grid grid-cols-[repeat(auto-fit,minmax(335px,1fr))] gap-5">
        {gameProjectsData.map((data) => {
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

export default GameProjects;
