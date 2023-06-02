import React from "react";

function Appartment(props) {
  return (
    <div>
      <img src={require(`../assets/images/${props.image}.jpg`)}></img>
      <div>This is an appartment</div>
    </div>
  );
}

export default Appartment;
