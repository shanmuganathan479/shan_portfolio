import React, { Component } from "react";
import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/Intro";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Experience from "./components/Experience";
import SkillsGrid from "./components/Skills";

const sectionsData = [
  { id: "Home", Component: Home },
  { id: "About", Component: About },
  { id: "Experience", Component: Experience },
  { id: "Skills", Component: SkillsGrid },
  { id: "Project", Component: Project },
  { id: "Contact", Component: Contact },
];

function App() {
  const [activeSection, setActiveSection] = useState(sectionsData[0].id);

  const refs = useRef(
    sectionsData.reduce((acc, section) => {
      acc[section.id] = React.createRef();
      return acc;
    }, {})
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowMiddle = window.innerHeight / 2;

      let closestSection = null;
      let minDistance = Infinity;

      // Iterate all section refs
      sectionsData.forEach(({ id }) => {
        const sectionTop = refs.current[id].current.getBoundingClientRect().top;
        const distance = Math.abs(sectionTop - windowMiddle);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = id;
        }
      });

      if (closestSection && closestSection !== activeSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // useEffect(() => {
  //   console.log("Active section changed to:", activeSection);
  // }, [activeSection]);

  const handleNavClick = (sectionId) => {
    const sectionRef = refs.current[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header activeSection={activeSection} onNavClick={handleNavClick} />

      <div style={{ backgroundColor: "#11071F" }}>
        {sectionsData.map(({ id, Component }) => (
          <section
            key={id}
            ref={refs.current[id]}
            // style={{ minHeight: "100vh" }}
          >
            <Component />
          </section>
        ))}
      </div>
    </>
  );
}

export default App;
