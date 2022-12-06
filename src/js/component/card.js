import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="card justify-content-center m-2" style={{ width: "400px", height: "500px" }}>
      <img className="card-img-top justify-content-center" style={{ width: "400px", height: "300px" }} src={props.url} alt="" />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p>{props.eye_color}</p>
        
        <Link to={props.type === "people" ? `/characters/${props.uid}`:  `/planets/${props.uid}`} className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
};
