import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import NoPage from "./components/NoPage.jsx";
import CardList from "./CardList";
import HomeAxios from "./HomeAxios.jsx";
import DetailTab from "./components/DetailTab.jsx";
import React, { useCallback, useState } from "react";
export let Context1 = React.createContext();
export default function App() {
  const [users, setUsers] = useState(["user1", "user2", "user3"]);
  const [theme, setTheme] = useState("light");
  const toggleTheme = useCallback(() => {
    setTheme(theme == "light" ? "dark" : "light");
  }, [theme]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeAxios />} />
        <Route path="/header" element={<Header />} />
        <Route path="/card" element={<Card />} />
        <Route path="/cardList" element={<CardList />} />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ theme, toggleTheme }}>
              <DetailTab />
            </Context1.Provider>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>{" "}
    </div>
  );
}
