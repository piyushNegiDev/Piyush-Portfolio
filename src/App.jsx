import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";
import AboutMePage from "./pages/AboutMePage";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="px-5 sm:px-10 lg:px-30 bg-bg text-white space-y-20 max-w-341.5 mx-auto ">
        <AnimatedRoutes />
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/about-me" element={<AboutMePage />} />
    </Routes>
  );
};

export default App;
