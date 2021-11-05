import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Card from "./components/Card";
import Game from "./components/Game";
import Start from "./components/Start";
// import Timer from "./components/Timer";
import Error404 from "./components/Error404";
import c1 from "./imges/f1.jpeg";
import c2 from "./imges/f2.jpeg";
import c3 from "./imges/h4.jpeg";
import c4 from "./imges/h3.jpeg";
import c5 from "./imges/f5.jpeg";
import c6 from "./imges/f6.jpeg";
import c7 from "./imges/f7.png";
import c8 from "./imges/f8.jpeg";
import c9 from "./imges/f9.jpeg";
import c10 from "./imges/f10.jpeg";



import "./App.css";

function App() {
  const [cards, setCards] = useState([
    { id: 1, img: c1 },
    { id: 2, img: c2 },
    { id: 3, img: c3 },
    { id: 4, img: c4 },
    { id: 5, img: c5 },
    { id: 6, img: c6 },
    { id: 7, img: c7 },
    { id: 8, img: c8 },
    { id: 9, img: c9 },
    { id: 10, img: c10 },

  ]);

  return (
    <div className="App">
      
      <Start />
      <Routes>
        <Route exact path="/start" element={<Start />} />
        <Route exact path="/game" element={<Game />} />
        <Route  path="/card/:id" element={<Card cards={cards} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;