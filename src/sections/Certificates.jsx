import React from "react";
import { certificates } from "../data";

export default function Certificates() {
  return (
    <section className="content">
      <p className="code-comment">/* certificates & achievements */</p>

      {certificates.map((c, index) => (
        <div
          key={index}
          className="card"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <div className="card-header">
            <h3>{c.title}</h3>
            <span className="card-subtitle">
              {c.issuer} · {c.year}
            </span>
          </div>

          <a
            className="secondary-btn"
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 View Certificate
          </a>
        </div>
      ))}
    </section>
  );
}
