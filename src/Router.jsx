import "./styles.css";
import roomDetails from "./Rooms.js";
import Header from "./components/Header";
import Card from "./components/Card";
import { Link } from "react-router-dom";
export default function Router() {
  return (
    <nav>
      <Header />
      <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="/card">Card</Link>
        <Link to="/cardList">CardList</Link>
        <Link to="/about">about</Link>
      </div>
    </nav>
  );
}
