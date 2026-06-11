import { motion } from "motion/react";

const PulseAnimation = ({ className }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        boxShadow: [
          "0 0 0px rgba(198, 28, 255, 0.4)",
          "0 0 8px rgba(200, 0, 255, 0.7)",
          "0 0 0px rgba(153, 0, 255, 0.4)",
        ],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
      }}
      className={`bg-primary ${className}`}
    />
  );
};

export default PulseAnimation;
