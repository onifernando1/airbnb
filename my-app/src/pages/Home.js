import React from "react";
import Appartment from "./Appartment";
import AppartmentList from "./AppartmentList";
import { useState } from "react";

function Home() {
  const [appartmentArray, setAppartmentArray] = useState([
    <Appartment image="house1" />,
    <Appartment image="house2" />,
    <Appartment image="house3" />,
    <Appartment image="house4" />,
  ]);

  return (
    <div>
      <div>
        {appartmentArray.map((appartment) => {
          return <div>{appartment.props.image}</div>;
        })}
      </div>
    </div>
  );
}

export default Home;
