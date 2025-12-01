import React from "react";
import { profile } from "../data";

const navItems = [
  { id: "about", label: "about.tsx" },
  { id: "skills", label: "skills.css" },
  { id: "projects", label: "projects.json" },
  { id: "experience", label: "experience.md" },
  { id: "certificates", label: "certificates.md" },
  { id: "contact", label: "contact.html" }
];

export default function Sidebar({ activeTab, onChangeTab }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">EXPLORER</div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">PORTFOLIO</div>
        <div className="sidebar-file-tree">
          <div className="folder">
            <span className="folder-dot" />
            <span className="folder-label">src</span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`file ${activeTab === item.id ? "file-active" : ""}`}
              onClick={() => onChangeTab(item.id)}
            >
              <span className="file-dot" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-name">{profile.name}</div>
        <div className="sidebar-role">Frontend · React · Web</div>
      </div>
    </aside>
  );
}
