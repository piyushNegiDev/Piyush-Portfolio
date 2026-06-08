import { FaGithub } from "react-icons/fa";
import CompletedProjects from "../components/projects/CompletedProjects";
import ShortProjects from "../components/projects/ShortProjects";
import GameProjects from "../components/projects/GameProjects";

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
  return (
    <div id="" className="space-y-20 scroll-mt-35">
      <CompletedProjects container={container} item={item} />

      <ShortProjects container={container} item={item} />

      <GameProjects container={container} item={item} />

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
