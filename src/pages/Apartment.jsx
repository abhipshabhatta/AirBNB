import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion";

function Apartment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        if (!found) {
          // If no match, redirect to a 404 page
          navigate("/"); 
        } else {
          setApartment(found);
        }
      })
      .catch((err) => console.log(err));
  }, [id, navigate]);

  if (!apartment) return <main>Loading...</main>;

  const { title, location, tags, rating, host, description, equipments } =
    apartment;

  return (
    <main>
      <div className="carousel">
        {apartment.pictures && apartment.pictures.length > 0 && (
          <div className="carousel-item">
            <img src={apartment.pictures[0]} alt={title} />
          </div>
        )}
      </div>

      <article className="apartment">
        <h2>{title}</h2>
        <p>{location}</p>
        <div className="tags-container">
          {tags && tags.map((t) => (
            <div className="tag" key={t}>{t}</div>
          ))}
        </div>
      </article>

      <div className="apartment-accordion-container">
        <Accordion title="Description" content={description} />
        <Accordion
          title="Equipment"
          content={
            <ul>
              {equipments && equipments.map((eq) => <li key={eq}>{eq}</li>)}
            </ul>
          }
        />
      </div>
      <hr style={{ marginTop: "1em" }} />
    </main>
  );
}

export default Apartment;
