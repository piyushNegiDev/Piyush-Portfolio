import { CgMail } from "react-icons/cg";
import ContactForm from "../ContactForm";
import { motion } from "motion/react";
import { FaInstagram } from "react-icons/fa";

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

const Contact = () => {
  return (
    <div id="contact" className="scroll-mt-35 grid sm:grid-cols-2 gap-10">
      <div className="">
        <p className="text-3xl flex items-center mb-20">
          <span className="text-primary">#</span>
          <span>contact</span>
          <span className="h-0.5 mt-2 ml-5 bg-primary w-full sm:w-50 md:w-100"></span>
        </p>

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=""
        >
          <p className="text-gray text-lg mb-10">
            Whether you have an opportunity, a project, or just want to connect,
            my inbox is always open. I'm currently seeking a full-time Front-end
            Developer position and would love to be part of a team where I can
            make an impact.
          </p>
          <div className="border border-gray p-1 pr-2 rounded-lg justify-self-center sm:justify-self-start">
            <h2 className="p-1">Message me here</h2>
            <p className="text-gray text-lg flex gap-1 items-center">
              <CgMail className="text-3xl" />{" "}
              <span>piyushnegi381@gmail.com</span>
            </p>
            <p className="text-gray text-lg flex gap-1 items-center">
              <FaInstagram className="text-3xl" />{" "}
              <span>piyush_negi381</span>
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className=""
      >
        <motion.h2
          variants={item}
          className="mb-10 text-2xl font-semibold flow-text"
        >
          Don't be shy, say hello!
        </motion.h2>
        <ContactForm variants={item} />
      </motion.div>
    </div>
  );
};

export default Contact;
