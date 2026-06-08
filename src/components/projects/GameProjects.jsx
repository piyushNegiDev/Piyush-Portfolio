import AnimatedButton from "../AnimatedButton";
import { motion } from "motion/react";

const GameProjects = ({ container, item }) => {
  const gameProjectsData = [
    {
      stack: "HTML, CSS, JAVASCRIPT, VERCEL",
      description:
        "2048 is a browser-based implementation of the classic number puzzle game. Slide tiles using arrow keys to merge matching numbers and reach the 2048 tile. Features score tracking, random tile generation, and game-over detection — all built with vanilla web technologies, no frameworks.",
      name: "2048 Game",
      link: "https://2048-game-zeta-gold.vercel.app/",
    },
    {
      stack: "HTML, CSS, JAVASCRIPT, VERCEL",
      description:
        "Advance Memory Game is a feature-rich card matching game playable across three difficulty levels — Easy (4*4), Medium (6*6), and Hard (8*8). It includes a card preview timer, hint system, pause/resume, live move and time tracking, best score saved in localStorage, and sound effects — all built with zero dependencies.",
      name: "Memory Game",
      link: "https://advance-memory-game.vercel.app/",
    },
  ];

  return (
    <div className="space-y-20">
      <div className="flex item-center gap-5">
        <p className="text-3xl flex items-center">
          <span className="text-primary">#</span>
          <span>Some Games</span>
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

export default GameProjects;
