import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <div className="px-30 bg-bg">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src="/logo-white.svg" alt="" />
          <span className="text-white text-2xl">piyushNegi</span>
        </div>
        <ul className="flex gap-4 text-white text-xl">
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

      <div>
        <div></div>
        <div>
          <img src="/hero-image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
