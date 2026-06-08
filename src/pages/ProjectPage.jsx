import SnapShot from "../assets/SnapShot.png";
import PennyFlow from "../assets/PennyFlow.png";
import ScheduleTracker from "../assets/ScheduleTracker.png";
import YeahMovies from "../assets/YeahMovies.png";
import WeatherApp from "../assets/WeatherApp.png";
import AgencyAi from "../assets/AgencyAi.png";

import { motion } from "motion/react";
import AnimatedButton from "../components/AnimatedButton";
import { FaGithub } from "react-icons/fa";

const container = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.15, duration: 0.5 },
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

const ProjectPage = () => {
  const completProjectsData = [
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
    {
      img: YeahMovies,
      stack: "HTML, CSS, JAVASCRIPT, TMDB-API, LOCALSTORAGE, GITHUB-PAGES",
      name: "YeahMovies",
      description:
        "YeahMovies A static movie discovery app powered by the TMDB API. Browse trending, top-rated, and upcoming films, search by title or actor, filter by genre, and save favorites to a local watchlist.",
      link: "https://piyushnegidev.github.io/YeahMovies/",
    },
    {
      img: WeatherApp,
      stack:
        "REACT, VITE, REACT-ROUTER, OPENWEATHERMAP, API, DAYJS, CSS, VERCEL",
      name: "Weather App",
      description:
        "Weather App is a real-time weather application that lets users search for any city and instantly view current weather conditions, temperature, humidity, wind speed, and more. It uses the OpenWeatherMap API to fetch live data and presents it in a clean, responsive interface with dynamic weather icons.",
      link: "https://weather-app-react-ten-dusky.vercel.app/",
    },
    {
      img: AgencyAi,
      stack: "REACT, VITE, TAILWIND CSS, VERCEL",
      name: "Agency Ai",
      description:
        "Agency.AI is a modern digital agency landing page with a sleek, professional design. It showcases the agency's services, features, and value proposition through a clean single-page layout with a bold hero section and responsive design across all devices.",
      link: "https://agency-ai-nine-inky.vercel.app/",
    },
  ];

  const shortProjectsData = [
    {
      stack: "REACT, VITE, TAILWIND CSS, FIREBASE, FORMIK, YUP, VERCEL",
      description:
        "Contact App is a real-time contact management app that lets users add, edit, delete, and search through their contacts. All data is synced live with Firebase Firestore, with form validation and toast notifications for a smooth, feedback-rich experience.",
      name: "Contact App",
      link: "https://contact-app-react-coral.vercel.app/",
    },
    {
      stack: "HTML, CSS, JAVASCRIPT, NODE.JS, EXPRESS, GEMINI API, VERCEL",
      description:
        "AI Chat App is a full-stack chatbot application powered by Google's Gemini API. Users can send messages and receive AI-generated responses with markdown rendering support. The Express backend handles API communication, basic request validation, and rate limiting, while the frontend delivers a clean and minimal chat interface.",
      name: "AI Chat App",
      link: "https://ai-chat-app-delta-black.vercel.app/",
    },
    {
      stack: "REACT, VITE, CSS, VERCEL",
      description:
        "BMI Calculator is a simple and clean tool that calculates your Body Mass Index based on your height and weight. It instantly displays your BMI value along with your health category — Underweight, Normal, Overweight, or Obese — in a minimal, easy-to-use interface.",
      name: "BMI Calculator",
      link: "https://bmi-calculator-psi-tan.vercel.app/",
    },
  ];

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
    <div id="" className="space-y-20 scroll-mt-35">
      <div className="space-y-20">
        <div className="flex item-center gap-5">
          <p className="text-3xl flex items-center">
            <span className="text-primary">#</span>
            <span>Complete Projects</span>
          </p>
          <div className="grow mt-5">
            <div className="h-0.5 bg-primary w-full sm:w-50 md:w-100" />
          </div>
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

      <div className="space-y-20">
        <div className="flex item-center gap-5">
          <p className="text-3xl flex items-center">
            <span className="text-primary">#</span>
            <span>Small Projects</span>
          </p>
          <div className="grow mt-5">
            <div className="h-0.5 bg-primary w-full sm:w-50 md:w-100" />
          </div>
        </div>

        <motion.div className="grid grid-cols-[repeat(auto-fit,minmax(335px,1fr))] gap-5">
          {shortProjectsData.map((data) => {
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

      <div className="flex max-[513px]:flex-col text-center gap-5 items-center justify-center text-xl text-gray">
        <p>View Source Code and more projects on GitHub</p>
        <a
          href="https://github.com/piyushNegiDev?tab=repositories"
          target="_blank "
          rel="noreferrer"
        >
          <FaGithub className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default ProjectPage;
