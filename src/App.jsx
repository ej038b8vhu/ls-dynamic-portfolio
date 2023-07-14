import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkill from "./scenes/MySkill";
import Projects from "./scenes/Projects";
import Certificate from "./scenes/Certificate";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  //selectedPage state for navbar active color
  const [selectedPage, setSelectedPage] = useState("home");
  //isTopOfPage for navbar background color
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  //detect if scroller on top on page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* md: => means above md media query screen size that defined in tailwind.config */}
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <MySkill />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Certificate />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
