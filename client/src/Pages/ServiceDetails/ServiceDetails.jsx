

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../components/Home";
import HeroSection from "../../components/services/HeroSection";
import Services from "../../components/Servicedetails/Services";
import Home from "../Home/Home";


const App = () => {
  return (
    <Router>
      <HeroSection />

      <div className="flex flex-col-reverse lg:flex-row sm:mx-[8%] xl:mx-[10%]">
        {/*  <Services /> */}
        <Services />
        {/* Dynamic route for pages */}
        <Routes>
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
