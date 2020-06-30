import React from 'react';
import Card from './Card';

import card from "./data/card.json";

import './App.css';

function App() {
  return (
    <Card {...card} />
  );
}

export default App;
