import React from "react";
import "../CSS/Card.css";

const Card = () => {
  return (
    <div className="card">
      <div
        className="card--image"
        style={{
          backgroundImage:
            "url(https://www.psy.pl/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fcdn.psy.pl%2Fszpic_miniaturowy_pomeranian_641c599154.jpg&w=1080&q=75)",
        }}
      ></div>
      <h3>Pomeranian</h3>
      <span>Klasa Toy (VIII)</span>
      <button>
        <span className="material-symbols-outlined">favorite</span> <span className="card--like">  Polub</span>
      </button>
    </div>
  );
};

export default Card;
