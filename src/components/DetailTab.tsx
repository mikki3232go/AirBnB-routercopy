import React, { useContext } from "react";
import "../styles.css";
import { Context1 } from "../App";
import { useParams } from "react-router-dom";
import Rooms, { Room } from "../Rooms";



export default function DetailTab() {
  const { theme, toggleTheme } = useContext(Context1);
  const { id } = useParams<{ id: string }>();
  const room = Rooms.find((room) => room.key === Number(id));

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>테마 변경</button>
      <div className="container">
        <div className="box image">
          <img src={room.image} className="boximage" alt={room.name} />
        </div>
        <div className="box">
          <div className="location">{room.location}에 위치</div>
          <div className="title">{room.name}</div>
          <hr />
          <div className="guest">최대인원{room.totalGuest} 명</div>
          <div className="rating">
            평점: {room.rating}{" "}
            <span className="visits">({room.numberOfRating})</span>
          </div>
          <div className="price">
            {room.price} 원<span className="month">/ month</span>
          </div>
        </div>
      </div>
    </div>
  );
} 