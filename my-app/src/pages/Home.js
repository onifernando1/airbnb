import React from "react";
import Appartment from "./Appartment";
import AppartmentList from "./AppartmentList";
import { useState } from "react";

function Home() {
  const [appartmentArray, setAppartmentArray] = useState([
    <Appartment image="house1" title="House 1" />,
    <Appartment image="house2" title="House 2" />,
    <Appartment image="house3" title="House 3" />,
    <Appartment image="house4" title="House 4" />,
  ]);

  return (
    <div>
      <div className="appartmentContainer">
        {appartmentArray.map((appartment) => {
          return (
            <div className="individualAppartment">
              <img
                src={require(`../assets/images/${appartment.props.image}.jpg`)}
              ></img>
              <div>{appartment.props.image}</div>
              <div>{appartment.props.image}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
