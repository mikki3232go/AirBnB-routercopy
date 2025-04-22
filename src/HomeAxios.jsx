import Rooms from "./Rooms.js";
import Router from "./Router.jsx";
import axios from "axios"; //1. axios를 import
import { useState } from "react"; //2. useState를 import
import "./styles.css";
import { useNavigate } from "react-router-dom";
export default function HomeAxios() {
  // 3. 컴포넌트 명 수정
  const navigate = useNavigate();
  const [rooms, setRooms] = useState(Rooms); //4. useState를 이용하여 rooms를 Rooms.js 있는 배열로 초기화시킴.
  return (
    <>
      <Router />
      <div id="wrapper">
        {rooms.map(
          //5. useState 변수 rooms 배열의 각 요소를 map으로 반복
          (room) => (
            <div className="box" key={room.key}>
              <img
                onClick={() => navigate("/detail/" + room.key)}
                className="boximage"
                src={room.image}
              />
              <p>{room.name}</p>
            </div>
          ),
        )}
      </div>{" "}
      {/* 6. 더보기 button을 누르면 axios.get().then() 이용하여 데이터 가져오기*/}
      <button
        style={{ marginTop: "20px" }}
        onClick={() => {
          axios // 7. axios.get().then() 이용하여 데이터 가져오기
            .get("https://mikki32sw.github.io/airanb/data.json")
            .then((result) => {
              console.log(result.data);
              const copyRooms = [...rooms, ...result.data]; //8. 중요 :  rooms 배열을 복사하고, result.data를 rooms 배열에 추가 !!
              console.log(copyRooms);
              setRooms(copyRooms); //9.새 배열(copyRooms) 주소를 setRooms() 함수로 전달)
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
