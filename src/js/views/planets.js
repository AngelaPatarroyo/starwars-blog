import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const Planets = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    params?.theid && actions.getPlanets(params.theid);
  }, [params?.theid]);
  console.log(store?.planetsLearnMore);
  return (
    <div clasName="container" style={{ height: "700px", width: "1400px" }}>
      <div>
        <div className="d-flex m-5">
          <img
            className="align-items-center"
            height={350}
            width={450}
            src={store.imgPlanets[params?.theid-1].url}
          />
          <div className="m-5">
            <h1 className="text-center mb-5">{store.planetsLearnMore?.name}</h1>
            <p className=" text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo
              augue, tristique id nisl ut, consequat luctus felis. Nunc egestas,
              lacus eu pharetra eleifend, ante felis tempus mi, vel tempus felis
              nulla facilisis lorem. In hac habitasse platea dictumst. Aenean
              ornare semper magna sit amet volutpat. Vivamus odio enim, faucibus
              a turpis venenatis, vestibulum dictum ex. Nulla sed porttitor
              ipsum, quis lobortis libero. Suspendisse iaculis eleifend ante, in
              scelerisque nibh ornare a. Vestibulum id erat augue. Aliquam vel
              fringilla lorem, sed rutrum ex. Donec in tortor venenatis lacus
              cursus faucibus. Aenean ut consectetur diam. Etiam rhoncus
              tincidunt sagittis. Duis dapibus rhoncus imperdiet. Nulla quis
              tincidunt ipsum. Ut at leo sollicitudin, mattis elit id, lobortis
              ex.
            </p>
          </div>
        </div>

        <div className="d-flex">
          <p className="m-3">Name:{store.planetsLearnMore?.name}</p>
          <p className="m-3">Climate:{store.planetsLearnMore?.climate}</p>
          <p className="m-3">Gravity:{store.planetsLearnMore?.gravity}</p>
          <p className="m-3">Population:{store.planetsLearnMore?.population}</p>
          <p className="m-3">Terrain:{store.planetsLearnMore?.terrain}</p>
          
        
        </div>
      </div>
    </div>
  );
};
export { Planets };
