import React from "react";
import "../styles.css";
import { useParams } from "react-router-dom";
import Rooms from "../Rooms.js";
export default function Detail() {
  let { id } = useParams(); //useParams()를 이용하여 파라미터로 id 받기
  console.log(id);
  let room = Rooms.filter((item) => item.key == id); //rooms의 key값과 id값이 일치하는 값 저장
  let result = room[0]; //배열의 첫번째 값을 room에 저장
  // let result = Rooms[id];
  console.log(result.name);
  return (
    <div className="container">
      <div className="box image">
        <img src={result.image} className="boximage" alt="Room" />
      </div>
      <div className="box">
        <div className="location">{result.name} </div>
        <div className="location">{result.location}에 위치</div>
        <div className="title">{result.title}</div>
        <hr />
        <div className="guest">최대인원{result.totalGuest} 명</div>
        <div className="rating">
          평점: {result.rating}{" "}
          <span className="visits">({result.numberOfRating})</span>
        </div>
        <div className="price">
          {result.price} 원<span className="month">/ month</span>
        </div>
      </div>
    </div>
  );
}
