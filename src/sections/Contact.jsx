import React from "react";
import { links } from "../data";

export default function Contact() {
  return (
    <section className="content">
      <p className="code-comment">// get in touch</p>

      <p className="paragraph">
        I’m open to frontend roles, internships and collaboration on interesting
        web projects. The fastest way to reach me is by email or LinkedIn.
      </p>

      <div className="contact-links">
        <div>
          // email <br />
          <a href={`mailto:${links.email}`}>email</a>
        </div>
        <div>
          // LinkedIn <br />
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </div>
        <div>
          // GitHub <br />
          <a href={links.github} target="_blank" rel="noreferrer">
            github.com/neel1308
          </a>
        </div>
        <div>
          // YouTube <br />
          <a href={links.youtube} target="_blank" rel="noreferrer">
            @lagzerogaming
          </a>
        </div>
      </div>

      <p className="code-comment">// quick message (static)</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input placeholder="Your name" />
        <input placeholder="Your email" />
        <textarea rows="4" placeholder="Your message" />
        <button className="disabled-btn" disabled>
          Coming soon – use email instead
        </button>
      </form>
    </section>
  );
}
