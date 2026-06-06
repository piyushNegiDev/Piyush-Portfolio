// import YeahMovies from "../../assets/YeahMovies.png";
import SnapShot from "../../assets/SnapShot.png";
import PennyFlow from "../../assets/PennyFlow.png";
import ScheduleTracker from "../../assets/ScheduleTracker.png";
import AnimatedButton from "../AnimatedButton";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
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

const Projects = () => {
  const navigate = useNavigate();

  const projectsData = [
    {
      img: SnapShot,
      stack:
        "REACT, VITE, REACT-ROUTER, FIREBASE, TAILWIND, FORMIK, YUP, VERCEL",
      name: "SnapShot",
      description:
        "SnapShot A full-stack notes app with real-time sync, user authentication with email verification, protected routes, and a light/dark theme toggle.",
      link: "https://notes-app-react-liard.vercel.app/dashboard",
    },
    {
      img: PennyFlow,
      stack: "REACT, VITE, REACT-ROUTER, RECHARTS, TAILWIND, DAYJS, VERCEL",
      name: "PennyFlow",
      description:
        "PennyFlow A personal finance tracker to log and categorize expenses, with an interactive dashboard and charts to visualize spending over time.",
      link: "https://expense-tracker-react-theta-six.vercel.app/",
    },
    {
      img: ScheduleTracker,
      stack: "HTML, CSS, JAVASCRIPT, EXPRESS, MONGODB, JWT, VERCEL",
      name: "Schedule Tracker",
      description:
        "Schedule Tracker A full-stack daily habit and schedule tracking app where users create entries and check them off each day, with JWT auth, per-user data scoping, and a REST API backend.",
      link: "https://schedule-tracker-nu.vercel.app/",
    },
    // {
    //   img: YeahMovies,
    //   stack: "HTML, CSS, JAVASCRIPT, TMDB-API, LOCALSTORAGE, GITHUB-PAGES",
    //   name: "YeahMovies",
    //   description:
    //     "YeahMovies A static movie discovery app powered by the TMDB API. Browse trending, top-rated, and upcoming films, search by title or actor, filter by genre, and save favorites to a local watchlist.",
    //   link: "https://piyushnegidev.github.io/YeahMovies/",
    // },
  ];

  return (
    <div id="projects" className="space-y-20 scroll-mt-35">
      <div className="flex item-center justify-between">
        <p className="text-3xl flex items-center">
          <span className="text-primary">#</span>
          <span>projects</span>
          <span className="h-0.5 mt-2 ml-5 bg-primary w-0 sm:w-50 md:w-100"></span>
        </p>
        <p
          className="cursor-pointer mt-2"
          onClick={() => {
            navigate("/projects");
          }}
        >
          View all {"---->"}
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(335px,1fr))] gap-5"
      >
        {projectsData.map((data) => {
          return (
            <motion.div
              key={data.name}
              variants={item}
              className="border border-gray shadow shadow-primary"
            >
              <div className="border-b border-gray">
                <img src={data.img} alt="" />
              </div>
              <div className="border-b border-gray">
                <p className="text-gray p-2">{data.stack}</p>
              </div>
              <div className="space-y-5 p-4">
                <h2 className="text-2xl font-semibold flow-text">
                  {data.name}
                </h2>
                <p className="text-gray">{data.description}</p>
                <a target="blank" href={data.link}>
                  <AnimatedButton
                    className={"cursor-pointer border border-primary p-2"}
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

export default Projects;
