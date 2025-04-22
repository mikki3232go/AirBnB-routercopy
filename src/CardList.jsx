import "./styles.css";
import roomDetails from "./Rooms.js";
import Card from "./components/Card";
export default function CardList() {
  return (
   <div>
  <h2>Your result is here!</h2>
  {roomDetails.map((item) => (
  <Card
    key={item.key}
    title={item.name}
    location={item.location}
    guest={item.totalGuest}
    rating={item.rating}
    numberofrating={item.numberOfRating}
    price={item.price}
    image={item.image}
  />
))}
</div>
  );
}
