import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/Card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store?.people);
  return (
    <div>
      <h4 className="m-5" style={{ color: "red" }}>
        Characters
      </h4>
      <div className="text-center d-flex m-5 p-3 overflow-scroll">
        {store?.people.length ? (
          <>
            {store?.people.map((element, i) => {
              return (
                <div>
                  <Card type="people"
                    key={element?.uid}
                    uid={element?.uid}
                    title={element?.name}
                    
                    indice={i}
                    url={store.imgPeople[i].url}
                  ></Card>
                </div>
              );
            })}
          </>
        ) : (
          "loading..."
        )}
      </div>
      <h4 className="m-5" style={{ color: "red" }}>
        Planets
      </h4>
      <div className="text-center d-flex m-5 p-3 overflow-scroll">
        <>
          {store?.planets.map((element, i)=>{
            return (<Card type="planets"
            key={element?.uid}
            uid={element?.uid}
            title={element?.name}
            
            indice={i}
            url={store.imgPlanets[i].url}
          ></Card>)
          })}
        </>
        </div>
      </div>
    
  );
};
