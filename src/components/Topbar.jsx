import React from "react";

export default function Topbar({ theme, onToggleTheme }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="traffic traffic-red" />
        <span className="traffic traffic-yellow" />
        <span className="traffic traffic-green" />
        <span className="topbar-title">Neel Patel – Frontend Developer</span>
      </div>

      <div className="topbar-right">
        <button
          className={`theme-toggle ${
            theme === "dark" ? "theme-active" : ""
          }`}
          onClick={() => onToggleTheme("dark")}
        >
          VS Code Dark
        </button>
        <button
          className={`theme-toggle ${
            theme === "light" ? "theme-active" : ""
          }`}
          onClick={() => onToggleTheme("light")}
        >
          VS Code White
        </button>
      </div>
    </header>
  );
}
