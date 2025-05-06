import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import NoPage from "./components/NoPage";
import CardList from "./CardList";
import HomeAxios from "./HomeAxios";
import DetailTab from "./components/DetailTab";
import React, { useCallback, useState, createContext } from "react";
import Rooms from "./Rooms";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const Context1 = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");
  
  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeAxios />} />
        <Route path="/header" element={<Header />} />
        <Route path="/card" element={<Card item={Rooms[0]} />} />
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
      </Routes>
    </div>
  );
} 