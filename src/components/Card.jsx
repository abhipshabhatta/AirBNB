import React from "react";

function Card({ title, image, alt }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      {image && <img className="card-img" src={image} alt={alt || title} />}
    </article>
  );
}

export default Card;
