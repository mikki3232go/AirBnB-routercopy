import "./styles.css";
import roomDetails from "./Rooms";
import Card from "./components/Card";

interface CardProps {
  key: number;
  title: string;
  location: string;
  guest: string;
  rating: string;
  numberofrating: string;
  price: string;
  image: string;
}

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