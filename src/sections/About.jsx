import React, { useEffect, useState } from "react";
import { profile } from "../data";

export default function About() {
  const [typedText, setTypedText] = useState("");

  // Simple typewriter effect for main heading
  useEffect(() => {
    const text = `Hi, I'm ${profile.name} – ${profile.title}`;
    let i = 0;

    const interval = setInterval(() => {
      i += 1;
      setTypedText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="content">
      {/* Typewriter heading */}
      <div className="typewriter">
        {typedText}
        <span className="typewriter-caret" />
      </div>

      <p className="code-comment">
        // Neel – Frontend Developer based in Gandhinagar
      </p>

      <div className="code-block">
        <p>
          <span className="code-keyword">const</span>{" "}
          <span className="code-variable">neelPatel</span> <span>=</span>{" "}
          {"{"}
        </p>
        <p>
          &nbsp;&nbsp;name: <span className="code-string">"{profile.name}"</span>
          ,
        </p>
        <p>
          &nbsp;&nbsp;title:{" "}
          <span className="code-string">"{profile.title}"</span>,
        </p>
        <p>
          &nbsp;&nbsp;location:{" "}
          <span className="code-string">"{profile.location}"</span>,
        </p>
        <p>
          &nbsp;&nbsp;languagesSpoken:{" ["}
          {profile.languages.map((l, i) => (
            <span key={l} className="code-string">
              "{l}"{i < profile.languages.length - 1 ? ", " : ""}
            </span>
          ))}
          {"],"}
        </p>
        <p>
          &nbsp;&nbsp;focusAreas:{" ["}
          {profile.focusAreas.map((f, i) => (
            <span key={f} className="code-string">
              "{f}"{i < profile.focusAreas.length - 1 ? ", " : ""}
            </span>
          ))}
          {"]"}
        </p>
        <p>{"};"}</p>
      </div>

      <p className="code-comment">// summary</p>
      <p className="paragraph">{profile.summary}</p>

      <div className="chips-row">
        <div className="chip-card">
          <div className="chip-title">💡 CURRENT FOCUS</div>
          <div className="chip-value">{profile.currentFocus}</div>
        </div>
        <div className="chip-card">
          <div className="chip-title">🚀 OPEN TO</div>
          <div className="chip-value">{profile.openTo.join(" · ")}</div>
        </div>
        <div className="chip-card">
          <div className="chip-title">📍 BASED IN</div>
          <div className="chip-value">{profile.basedIn}</div>
        </div>
      </div>

      <a
  className="primary-btn"
  href="Neel-Patel-Resume.pdf"
  download="Neel-Patel-Resume.pdf"
  target="_blank"
  rel="noreferrer"
>
  ⬇ Download Resume (PDF)
</a>

    </section>
  );
}
