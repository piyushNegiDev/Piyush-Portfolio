import SnapShot from "../../assets/SnapShot.png";
import PennyFlow from "../../assets/PennyFlow.png";
import ScheduleTracker from "../../assets/ScheduleTracker.png";
import YeahMovies from "../../assets/YeahMovies.png";
import WeatherApp from "../../assets/WeatherApp.png";
import AgencyAi from "../../assets/AgencyAi.png";
import AnimatedButton from "../AnimatedButton";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import PulseAnimation from "../PulseAnimation";

const CompletedProjects = ({ container, item }) => {
  const completProjectsData = [
    {
      img: SnapShot,
      stack:
        "REACT, VITE, REACT-ROUTER, FIREBASE, TAILWIND, FORMIK, YUP, VERCEL",
      name: "SnapShot",
      description:
        "A full-stack notes app with real-time sync, user authentication with email verification, protected routes, and a light/dark theme toggle.",
      link: "https://notes-app-react-liard.vercel.app/dashboard",
      githubLink: "https://github.com/piyushNegiDev/Notes-App-React",
    },
    {
      img: PennyFlow,
      stack: "REACT, VITE, REACT-ROUTER, RECHARTS, TAILWIND, DAYJS, VERCEL",
      name: "PennyFlow",
      description:
        "A personal finance tracker to log and categorize expenses, with an interactive dashboard and charts to visualize spending over time.",
      link: "https://expense-tracker-react-theta-six.vercel.app/",
      githubLink: "https://github.com/piyushNegiDev/Expense-Tracker-React",
    },
    {
      img: ScheduleTracker,
      stack: "HTML, CSS, JAVASCRIPT, EXPRESS, MONGODB, JWT, VERCEL",
      name: "Schedule Tracker",
      description:
        "A full-stack daily habit and schedule tracking app where users create entries and check them off each day, with JWT auth, per-user data scoping, and a REST API backend.",
      link: "https://schedule-tracker-nu.vercel.app/",
      githubLink: "https://github.com/piyushNegiDev/Schedule-Tracker",
    },
    {
      img: YeahMovies,
      stack: "HTML, CSS, JAVASCRIPT, TMDB-API, LOCALSTORAGE, GITHUB-PAGES",
      name: "YeahMovies",
      description:
        "A static movie discovery app powered by the TMDB API. Browse trending, top-rated, and upcoming films, search by title or actor, filter by genre, and save favorites to a local watchlist.",
      link: "https://piyushnegidev.github.io/YeahMovies/",
      githubLink: "https://github.com/piyushNegiDev/YeahMovies",
    },
    {
      img: WeatherApp,
      stack:
        "REACT, VITE, REACT-ROUTER, OPENWEATHERMAP, API, DAYJS, CSS, VERCEL",
      name: "Weather App",
      description:
        "A real-time weather application that lets users search for any city and instantly view current conditions, temperature, humidity, wind speed, and more via the OpenWeatherMap API.",
      link: "https://weather-app-react-ten-dusky.vercel.app/",
      githubLink: "https://github.com/piyushNegiDev/Weather-App-React",
    },
    {
      img: AgencyAi,
      stack: "REACT, VITE, TAILWIND CSS, VERCEL",
      name: "Agency Ai",
      description:
        "A modern digital agency landing page with a sleek, professional design. Showcases services and value proposition through a clean single-page layout with a bold hero section.",
      link: "https://agency-ai-nine-inky.vercel.app/",
      githubLink: "https://github.com/piyushNegiDev/Agency-Ai",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex item-center gap-5">
        <p className="text-2xl flex items-center">
          <span className="text-primary">#</span>
          <span>complete-projects</span>
        </p>
      </div>

      <motion.div className="grid grid-cols-[repeat(auto-fit,minmax(335px,1fr))] gap-5">
        {completProjectsData.map((data) => {
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
                <img src={data.img} alt="" />
              </div>
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

export default CompletedProjects;
