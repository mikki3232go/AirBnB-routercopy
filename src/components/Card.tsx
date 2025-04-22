import React from "react";
import "../styles.css";

interface CardProps {
  title: string;
  location: string;
  guest: string;
  rating: string;
  numberofrating: string;
  price: string;
  image: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="container">
      <div className="box image">
        <img src={props.image} className="boximage" alt="Room" />
      </div>
      <div className="box">
        <div className="location">{props.location}에 위치</div>
        <div className="title">{props.title}</div>
        <hr />
        <div className="guest">최대인원{props.guest} 명</div>
        <div className="rating">
          평점: {props.rating}{" "}
          <span className="visits">({props.numberofrating})</span>
        </div>
        <div className="price">
          {props.price} 원<span className="month">/ month</span>
        </div>
      </div>
    </div>
  );
} 