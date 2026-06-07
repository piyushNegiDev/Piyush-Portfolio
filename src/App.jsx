import { Route, Routes } from "react-router-dom";
import Projects from "./components/home/Projects";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutMe from "./components/home/AboutMe";
import { ToastContainer } from "react-toastify";
import { FaGithub, FaInstagram } from "react-icons/fa";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="px-5 sm:px-10 lg:px-30 bg-bg text-white space-y-20 max-w-341.5 mx-auto ">
        <AnimatedRoutes />
      </div>

      <div className="text-white px-5 sm:px-10 py-5 border-t border-gray mt-20">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-5 items-center justify-center">
            <p className="flex gap-5 items-center">
              <span className="flex items-center gap-2">
                <img src="/logo-white.svg" className="h-10" alt="" />
                <span className="text-lg">piyushNegi</span>
              </span>
              <span className="text-gray max-md:hidden">
                piyushnegi381@gmail.com
              </span>
            </p>
            <p className="text-lg flow-text text-center max-md:hidden">
              Web designer and front-end developer
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <h3 className="text-xl font-semibold">Media</h3>
            <div className="flex gap-5">
              <a href="https://github.com/piyushNegiDev" target="_blank">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-gray">
          © Copyright 2022. Made by Piyush Negi
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/about-me" element={<AboutMe />}></Route>
    </Routes>
  );
};

export default App;
