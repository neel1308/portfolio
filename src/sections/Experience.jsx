import React from "react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section className="content">
      <p className="code-comment">// experience</p>

      {experience.jobs.map((job) => (
        <article key={job.role} className="card">
          <h3>{job.role}</h3>
          <div className="card-subtitle">
            {job.company} · {job.period}
          </div>
          <ul className="list">
            {job.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </article>
      ))}

      <p className="code-comment">// education</p>
      {experience.education.map((edu) => (
        <article key={edu.degree} className="card">
          <h3>{edu.degree}</h3>
          <div className="card-subtitle">
            {edu.place} · {edu.period}
          </div>
          <p className="paragraph">{edu.description}</p>
        </article>
      ))}

      <p className="code-comment">// hackathons & activities</p>
      <ul className="list">
        {experience.activities.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </section>
  );
}
