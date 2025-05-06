import "./styles.css";
import Rooms, { Room } from "./Rooms";
import Card from "./components/Card";

export default function CardList() {
  return (
    <div>
      <h2>Your result is here!</h2>
      {Rooms.map((item: Room) => (
        <Card key={item.key} item={item} />
      ))}
    </div>
  );
} 