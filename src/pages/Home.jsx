import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Home() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="home-banner">
        <img src={bannerImg} alt="cabin airbnb" />
        <h2>Your key to the perfect home</h2>
      </section>

      <section className="cards-container">
        {apartments.map((apt) => (
          <Link to={`/apartment/${apt.id}`} key={apt.id}>
            <Card
              title={apt.title}
              image={apt.cover}
              alt={apt.title}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Home;
