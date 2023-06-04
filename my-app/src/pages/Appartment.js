import React from "react";
import { useParams } from "react-router-dom";

function Appartment(props) {
  const { id } = useParams();
  return (
    <div>
      {/* <img src={require(`../assets/images/${props.image}.jpg`)}></img> */}
      <div>This is an appartment {id}</div>
    </div>
  );
}

export default Appartment;
