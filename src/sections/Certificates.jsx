import React from "react";
import { certificates } from "../data";

export default function Certificates() {
  return (
    <section className="content">
      <p className="code-comment">// certificates & achievements</p>

      {certificates.map((c) => (
        <article key={c.name} className="card">
          <h3>{c.name}</h3>
          <div className="card-subtitle">
            {c.provider} · {c.year}
          </div>
          <button className="secondary-btn">
            📄 View Certificate
          </button>
        </article>
      ))}

      <p className="code-comment">// Certificates: One Click to View</p>
    </section>
  );
}
