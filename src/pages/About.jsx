import React, { useEffect, useState } from "react";
import Accordion from "../components/Accordion";

function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch("./data/data.about.en.json")
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!aboutData) return <main>Loading...</main>;

  return (
    <main className="about">
      <h1 id="about-title">{aboutData.title}</h1>
      <section>
      <img src={cabinImg} alt="cabin" />
      </section>
      <article id="about-description">
        {aboutData.description}
      </article>

      <div id="about-accordion-container" className="about-container">
        {aboutData.accordions.map((acc, idx) => (
          <Accordion key={idx} title={acc.title} content={acc.content} />
        ))}
      </div>
    </main>
  );
}

export default About;
