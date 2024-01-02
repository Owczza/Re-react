import React from "react";
import "../CSS/Card.css";

function Card(props)  {
  return (
    <div className="card">
      <div
        className="card--image"
        style={{
          backgroundImage:
            `url(${props.img})`
        }}
      ></div>
      <h3>{props.name}</h3>
      <span><b>{props.description}</b></span>
      <span>Grupa {props.group}, sekcja {props.section}</span>
      <button>
        <span className="material-symbols-outlined">favorite</span> <span className="card--like">  Polub</span>
      </button>
    </div>
  );
};

export default Card;
