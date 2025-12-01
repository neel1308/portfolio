import React from "react";
import { projects } from "../data";
import { links } from "../data";

export default function Projects() {
  return (
    <section className="content">
      <p className="code-comment">// featured projects</p>

      {projects.map((p) => (
        <article key={p.title} className="card">
          <div className="card-header">
            <h3>{p.title}</h3>
            <div className="card-tags">
              {p.stack.map((s) => (
                <span key={s} className="pill">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <p className="paragraph">{p.description}</p>
        </article>
      ))}

      <p className="code-comment">// more</p>
      <p className="paragraph">
        More code, experiments and mini-projects live on my{" "}
        <a href={links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>.
      </p>
    </section>
  );
}
