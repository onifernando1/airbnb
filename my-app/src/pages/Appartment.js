import React from "react";
import { useParams } from "react-router-dom";

function Appartment(props) {
  const { id, image, title, price, location } = useParams();
  console.log(props);
  const randomNumber = () => {
    let number = Math.floor(Math.random() * 100);
    return number;
  };

  return (
    <div>
      <div>{title}</div>
      <div>&#9733;4.9/5</div>
      <div>{randomNumber()} reviews</div>
      <img src={require(`../assets/images/${image}.jpg`)}></img>
      <div>This is an appartment {id}</div>
      <div>{image}</div>
      <div>{price}</div>
      <div>{location}</div>
    </div>
  );
}

export default Appartment;
