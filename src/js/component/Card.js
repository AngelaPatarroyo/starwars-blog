import React from "react";

export const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.gender}</p>

        {props.planetInformation && (
          <p>Terrain: {props.planetInformation.terrain}</p>
        )}

        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
