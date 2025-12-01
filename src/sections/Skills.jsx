import React, { useEffect, useState } from "react";
import { skills } from "../data";

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  // Trigger bar animation after mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="content">
      <p className="code-comment">/* technical stack */</p>

      {skills.tech.map((s, index) => (
        <div
          key={s.name}
          className="skill-row"
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <div className="skill-label">
            <span>{s.name}</span>
            <span className="skill-percent">{s.level}%</span>
          </div>

          <div className="skill-bar">
            <div
              className="skill-bar-fill"
              style={{
                width: mounted ? `${s.level}%` : "0%",
                transitionDelay: `${index * 80}ms`
              }}
            />
          </div>
        </div>
      ))}

      <p className="code-comment">/* tools & concepts */</p>
      <div className="pill-row">
        {skills.tools.map((t, index) => (
          <span
            key={t}
            className="pill pill-floating"
            style={{ animationDelay: `${index * 40}ms` }}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
