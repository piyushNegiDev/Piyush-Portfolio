import { NavLink } from "react-router-dom";
import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";

const App = () => {
  return (
    <div className="px-10 lg:px-30 bg-bg text-white space-y-20">
      <nav className="flex items-center justify-between pt-5 z-10 sticky top-0 bg-bg">
        <div className="flex items-center gap-5">
          <img src="/logo-white.svg" alt="" />
          <span className="text-xl md:text-2xl">piyushNegi</span>
        </div>
        <ul className="flex gap-4 md:text-xl">
          <li>
            <NavLink to="/">
              <span className="text-primary">#</span>home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <span className="text-primary">#</span>projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me">
              <span className="text-primary">#</span>about-me
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts">
              <span className="text-primary">#</span>contacts
            </NavLink>
          </li>
        </ul>
      </nav>

      <Hero />

      <Projects />
    </div>
  );
};

export default App;
