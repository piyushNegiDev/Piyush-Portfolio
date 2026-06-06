import { Route, Routes } from "react-router-dom";
import Projects from "./components/home/Projects";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutMe from "./components/home/AboutMe";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="px-5 sm:px-10 lg:px-30 bg-bg text-white space-y-20 max-w-341.5 mx-auto ">
        <AnimatedRoutes />
      </div>
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
