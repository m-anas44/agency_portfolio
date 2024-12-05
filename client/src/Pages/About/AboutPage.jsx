import About from "@/components/About/About";
import AboutUs from "@/components/About/AboutUs";
import OurMission from "@/components/About/OurMission";
import OurVision from "@/components/About/OurVision";
import TeamLeads from "@/components/About/TeamLeads";
import FeatureCards from "@/components/About/FeatureCards";
import CallToAction from "@/components/About/CallToAction";
import StatsCard from "../../components/About/StatsCard";

const AboutPage = () => {
  return (
    <div>
      <>
        <About />
        <OurMission />
        <AboutUs />
        <OurVision />
        <FeatureCards />  
        <TeamLeads />
        <CallToAction />
        <StatsCard />
      </>
    </div>
  );
};

export default AboutPage;
