import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";

import initialData from "./data/card.json";

import "./App.css";

function App() {
  const [card, setCard] = useState(initialData);

  return (
    <div className="app">
      <Card {...card} />
      <Form initialData={initialData} onChange={setCard} />
    </div>
  );
}

export default App;
