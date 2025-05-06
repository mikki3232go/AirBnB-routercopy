import "./styles.css";
import roomDetails from "./Rooms";
import Card from "./components/Card";

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

export default function CardList() {
  return (
    <div>
      <h2>Your result is here!</h2>
      {roomDetails.map((item: Room) => (
        <Card key={item.key} item={item} />
      ))}
    </div>
  );
} 