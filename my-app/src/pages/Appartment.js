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
      <div>Superhost</div>
      <div>{location}</div>
      <img src={require(`../assets/images/${image}.jpg`)}></img>
      <div>
        <div>Entire appartment hosted by Oni</div>
        <div>8 guests · 4 bedrooms · 4 beds · 3 bathrooms</div>
        <div>Profile image</div>
      </div>
      <div>
        <div>Self check in </div>
        <div>Oni is a superhost </div>
        <div>
          Superhosts are experienced, highly rated hosts who are committed to
          providing great stays for their guests.
        </div>
        <div>Free cancellation before 17 Aug.</div>
      </div>
      <div>
        <div>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
      <div>
        <div>Where you'll sleep</div>
        <div>
          <div>Image</div>
          <div>Bedroom 1 </div>
          <div>1 king bed</div>
        </div>
        <div>
          <div>Image</div>
          <div>Bedroom 2 </div>
          <div>1 king bed</div>
        </div>
        <div>
          <div>Image</div>
          <div>Bedroom 3</div>
          <div>1 king bed</div>
        </div>
        <div>
          <div>Image</div>
          <div>Bedroom 4 </div>
          <div>1 king bed</div>
        </div>
      </div>
      <div>
        <div>What this place offers</div>
        <div>
          <div>Image</div>
          <div>Kitchen</div>
        </div>
        <div>
          <div>Image</div>
          <div>Free parking on premises</div>
        </div>
        <div>
          <div>Image</div>
          <div>Washing machine</div>
        </div>
        <div>
          <div>Image</div>
          <div>Bath</div>
        </div>
        <div>
          <div>Image</div>
          <div>Garden</div>
        </div>
        <div>
          <div>Image</div>
          <div>Wifi</div>
        </div>
        <div>
          <div>Image</div>
          <div>TV</div>
        </div>
        <div>
          <div>Image</div>
          <div>Dryer</div>
        </div>
        <div>
          <div>Image</div>
          <div>Patio or balcony</div>
        </div>
        <div>
          <div>Image</div>
          <div>Carbon monoxide alarm</div>
        </div>
        <div>Show all 38 amenities</div>
      </div>
      <div>
        <div>4 nights in {location}</div>
        <div>
          <div>21 Aug - 25 sep</div>
        </div>
        <div>Calender</div>
      </div>
      <div>&#9733;4.9/5</div>
      <div>
        <div>Reviews</div>
      </div>
      <div>
        <div>Hosted by Oni</div>
        <div>Hosted by Oni</div>
        <div>Hosted by Oni</div>
        <div>Hosted by Oni</div>
        <div>Hosted by Oni</div>
        <div>Hosted by Oni</div>
        <div>Hosted by Oni</div>
      </div>
      <div>
        <div>Things to know </div>
        <div>Hosted by Oni</div>
        <div>Hosted by Oni</div>
        <div>Hosted by Oni</div>
        <div>Hosted by Oni</div>
      </div>
      <div>{price}</div>
    </div>
  );
}

export default Appartment;
