import React from "react";
import Appartment from "./Appartment";
import AppartmentList from "./AppartmentList";
import { useState } from "react";
import "../assets/css/home.css";

function Home() {
  const [appartmentArray, setAppartmentArray] = useState([
    <Appartment
      image="house1"
      title="House 1"
      price="34"
      location="Milan, Italy"
    />,
    <Appartment image="house2" title="House 2" />,
    <Appartment image="house3" title="House 3" />,
    <Appartment image="house4" title="House 4" />,
    <Appartment image="house3" title="House 3" />,
    // <Appartment image="house4" title="House 4" />,
  ]);

  return (
    <>
      <div className="appartmentContainer">
        {appartmentArray.map((appartment) => {
          return (
            <div className="individualAppartment">
              <div className="image-container">
                <img
                  src={require(`../assets/images/${appartment.props.image}.jpg`)}
                ></img>
              </div>
              <div className="appartmentInfo">
                <div className="location">{appartment.props.location}</div>
                <div>4.9/5</div>
                <div>21 Aug - 25 sep</div>
                <div>£{appartment.props.price}/night</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
