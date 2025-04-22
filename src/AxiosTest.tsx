import axios from "axios";

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

export default function AxiosTest() {
  return (
    <button
      onClick={() => {
        axios
          .get<Room[]>("https://mikki32sw.github.io/airanb/data.json")
          .then((result) => {
            console.log(result.data);
          })
          .catch(() => {
            console.log("실패함");
          });
      }}
    >
      버튼
    </button>
  );
} 