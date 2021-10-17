import React from "react";
import "./Card.css";

export const Card = (props) => {
  return (
    <div class="card">
      <img class="card-img-top" src={props.img} alt={props.name} />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p>Gender: {props.gender}</p>
        <p>Status: {props.status}</p>
        <btn class="btn btn-primary">Go somewhere</btn>
      </div>
    </div>
  );
};
