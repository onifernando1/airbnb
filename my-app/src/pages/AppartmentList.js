import React from "react";
import Appartment from "./Appartment";
import { useState } from "react";

function AppartmentList(params) {
  const { appartmentArray, setAppartmentArray } = useState([]);
  return (
    <div>
      <Appartment image="house1" />
    </div>
  );
}

export default AppartmentList;
