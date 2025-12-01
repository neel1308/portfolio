import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import TabBar from "./components/TabBar.jsx";

import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Certificates from "./sections/Certificates.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [theme, setTheme] = useState("dark");
  const [scrollProgress, setScrollProgress] = useState(0);

  const editorContentRef = useRef(null);

  // Theme sync with <html data-theme="">
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Scroll progress for the editor area
  useEffect(() => {
    const el = editorContentRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const total = scrollHeight - clientHeight;
      const progress = total > 0 ? (scrollTop / total) * 100 : 0;
      setScrollProgress(progress);
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll(); // initial

    return () => el.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "certificates":
        return <Certificates />;
      case "contact":
        return <Contact />;
      case "about":
      default:
        return <About />;
    }
  };

  const handleThemeChange = (mode) => {
    setTheme(mode);
  };

  return (
    <div className="app">
      <Topbar theme={theme} onToggleTheme={handleThemeChange} />
      <div className="app-main">
        <Sidebar activeTab={activeTab} onChangeTab={setActiveTab} />
        <main className="editor">
          <TabBar activeTab={activeTab} onChangeTab={setActiveTab} />

          {/* Scroll progress bar */}
          <div className="scroll-bar">
            <div
              className="scroll-bar-fill"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <div className="editor-content" ref={editorContentRef}>
            {renderContent()}
          </div>

          <footer className="statusbar">
            <span>Neel Patel</span>
            <span>UTF-8</span>
            <span>Frontend - React - Web</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
