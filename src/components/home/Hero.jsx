import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import AnimatedButton from "../AnimatedButton";

const Hero = () => {
  return (
    <div id="home" className="space-y-20 scroll-mt-35">
      <div className="flex max-lg:flex-col items-center justify-center gap-20">
        <div className="space-y-5 lg:space-y-10 max-lg:text-center max-lg:order-1">
          <p className="text-4xl max-sm:text-3xl font-semibold text-gray">
            Piyush is a <span className="flow-text">web designer</span> and{" "}
            <span className="flow-text">front-end developer</span>
          </p>
          <p className="text-gray max-w-xl min-h-20 max-lg:mx-auto">
            <TypeAnimation
              sequence={[
                "He crafts responsive websites where technologies meet creativity.",
                2000,
                "He transforms ideas into engaging digital experiences through clean code and thoughtful design.",
                2000,
                "He builds modern web applications that blend performance, functionality, and innovation.",
                2000,
                "He creates intuitive user interfaces that deliver seamless experiences across every device.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <AnimatedButton
            className={
              "border-2 rounded-lg cursor-pointer  hover:border-white hover:text-primary  border-primary px-5 py-3 transition-colors"
            }
          >
            Contact me !!
          </AnimatedButton>
        </div>

        <div className="relative flex flex-col items-center max-lg:order-0">
          <img
            className="absolute left-10 top-10 w-30"
            src="/logo-black.svg"
            alt=""
          />
          <img className="relative z-1" src="/profile-image.png" alt="" />
          <img
            className="absolute right-10 bottom-15 w-30"
            src="/Dots.png"
            alt=""
          />
          <div className="flex gap-3 items-center border border-gray px-2 py-1">
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
              className="h-5 w-5 bg-primary"
            ></motion.div>
            <span className="text-lg text-center">
              <span className="text-gray">Currently working on</span> Portfolio
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img src="/quote.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
