import React from "react";
import Appartment from "./Appartment";
import { useState } from "react";

function AppartmentList(params) {
  const [appartmentArray, setAppartmentArray] = useState([
    <Appartment image="house1" />,
    <Appartment image="house2" />,
    <Appartment image="house3" />,
    <Appartment image="house4" />,
  ]);

  console.log(appartmentArray);

  return (
    <div>
      {appartmentArray.map((appartment) => {
        return <div>{appartment.props.image}</div>;
      })}
    </div>
  );
}

export default AppartmentList;
