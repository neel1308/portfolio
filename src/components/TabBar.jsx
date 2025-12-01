import React from "react";

const tabs = [
  { id: "about", label: "about.tsx" },
  { id: "skills", label: "skills.css" },
  { id: "projects", label: "projects.json" },
  { id: "experience", label: "experience.md" },
  { id: "certificates", label: "certificates.md" },
  { id: "contact", label: "contact.html" }
];

export default function TabBar({ activeTab, onChangeTab }) {
  return (
    <div className="tabbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? "tab-active" : ""}`}
          onClick={() => onChangeTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
