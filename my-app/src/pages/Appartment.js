import React from "react";
import { useParams } from "react-router-dom";

function Appartment(props) {
  const { id, image, title, price, location } = useParams();
  console.log(props);
  return (
    <div>
      {/* <img src={require(`../assets/images/${props.image}.jpg`)}></img> */}
      <div>This is an appartment {id}</div>
      <div>{image}</div>
      <div>{title}</div>
      <div>{price}</div>
      <div>{location}</div>
    </div>
  );
}

export default Appartment;
