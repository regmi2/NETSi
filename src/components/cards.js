import React from "react";
import "./cards.css";
import CardItem from "./carditem";

function Cards() {
  return (
    <div className="cards">
      <h1>Products</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/thanka.jpg"
              text="Thanka Painting"
              label="Painting"
              // path="/services"
            />
            <CardItem
              src="images/cauli.jpeg"
              text="Cauli 3KG"
              label="Food"
              // path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/ankhijhyal.jpg"
              text="Ankhi Jhyal"
              label="Wood Craft"
              // path="/services"
            />
            <CardItem
              src="images/prayerflag.jpg"
              text="Prayer Flag"
              label="Religious"
              // path="/products"
            />
            <CardItem
              src="images/buddha.jpg"
              text="Bronze Buddha Statue"
              label="Metal Craft"
              // path="/sign-up"
            />

            <CardItem
              src="images/dhakatopi.jpg"
              text="Dhaka Topi"
              label="Hat"
              // path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
