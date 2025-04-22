import Rooms from "./Rooms";
import Router from "./Router";
import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

interface Room {
  key: number;
  name: string;
  location: string;
  totalGuest: string;
  rating: string;
  numberOfRating: string;
  price: string;
  image: string;
}

export default function HomeAxios2() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState<Room[]>(Rooms);

  return (
    <>
      <Router />
      <div id="wrapper">
        {rooms.map((room) => (
          <div className="box" key={room.key}>
            <img
              onClick={() => navigate(`/detail/${room.key}`)}
              className="boximage"
              src={room.image}
              alt={room.name}
            />
            <p>{room.name}</p>
          </div>
        ))}
      </div>
      <button
        style={{ marginTop: "20px" }}
        onClick={() => {
          axios
            .get<Room[]>("https://mikki32sw.github.io/airanb/data.json")
            .then((result) => {
              console.log(result.data);
              const copyRooms = [...rooms, ...result.data];
              console.log(copyRooms);
              setRooms(copyRooms);
            })
            .catch(() => {
              console.log("get 실패함");
            });
        }}
      >
        더보기
      </button>
    </>
  );
} 