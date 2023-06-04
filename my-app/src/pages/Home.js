import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Appartment from "./Appartment";
import AppartmentList from "./AppartmentList";
import { useState } from "react";
import "../assets/css/home.css";

function Home() {
  const [appartmentArray, setAppartmentArray] = useState([
    <Appartment
      id="1"
      image="house1"
      title="House 1"
      price="34"
      location="Milan, Italy"
    />,
    <Appartment
      image="house1"
      title="House 1"
      price="34"
      location="Milan, Italy"
    />,
    <Appartment
      image="house1"
      title="House 1"
      price="34"
      location="Milan, Italy"
    />,
    <Appartment
      image="house1"
      title="House 1"
      price="34"
      location="Milan, Italy"
    />,
    <Appartment
      image="house1"
      title="House 1"
      price="34"
      location="Milan, Italy"
    />,
    <Appartment
      image="house1"
      title="House 1"
      price="34"
      location="Milan, Italy"
    />,
    <Appartment
      image="house1"
      title="House 1"
      price="34"
      location="Milan, Italy"
    />,
    <Appartment
      image="house1"
      title="House 1"
      price="34"
      location="Milan, Italy"
    />,
    <Appartment
      image="house1"
      title="House 1"
      price="34"
      location="Milan, Italy"
    />,
    <Appartment
      image="house1"
      title="House 1"
      price="34"
      location="Milan, Italy"
    />,
    <Appartment
      image="house1"
      title="House 1"
      price="34"
      location="Milan, Italy"
    />,

    // <Appartment image="house4" title="House 4" />,
  ]);

  return (
    <>
      <div className="appartmentContainer">
        {appartmentArray.map((appartment) => {
          return (
            <div>
              <Link to={`/appartment/${appartment.props.id}`}>
                <div className="individualAppartment">
                  <div className="image-container">
                    <img
                      src={require(`../assets/images/${appartment.props.image}.jpg`)}
                    ></img>
                  </div>
                  <div className="appartment-info-container">
                    <div className="appartment-info">
                      <div className="location black">
                        {appartment.props.location}
                      </div>
                      <div>21 Aug - 25 sep</div>
                      <div className="price black">
                        £{appartment.props.price}/night
                      </div>
                    </div>
                    <div className="rating-container">
                      <div className="rating black">&#9733;4.9/5</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
