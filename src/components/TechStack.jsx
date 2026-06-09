import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function TechStack({ stack, item, time }) {
  const [techs, setTechs] = useState(
    stack || ["React", "Tailwind", "Firebase", "Git"],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTechs((prev) => {
        const copy = [...prev];
        copy.unshift(copy.pop());
        return copy;
      });
    }, time);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <motion.div layout className="flex flex-wrap gap-2">
      <AnimatePresence>
        {techs.map((tech) => (
          <motion.span
            layout
            key={tech}
            variants={item}
            className="border border-gray/50 px-2 py-1 rounded-2xl text-sm"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            {tech}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
