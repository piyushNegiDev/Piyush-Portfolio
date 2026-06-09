import AboutSection from "../components/about-me/AboutSection";
import FunFactsSection from "../components/about-me/FunFactsSection";
import SkillsSection from "../components/about-me/SkillsSection";

const AboutMePage = () => {
  return (
    <div id="" className="space-y-20 scroll-mt-35">
      <AboutSection />

      <SkillsSection />

      <FunFactsSection />
    </div>
  );
};

export default AboutMePage;
