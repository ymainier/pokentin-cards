import React from "react";
import { cards } from "./data/swsh2.json";

import "./Card.css";

const card = {
  ...cards[5],
  category: "Single Horn Pokémon",
  description:
    "It roams through forest searching for sweet nectar. Although it boasts fantastic physical strength, it's not that good at flying.",
  height: "1.50m",
  weight: "54kg",
};
console.log(card);

function CardImage({ src }) {
  return <img src={src} alt="Heracross" className="card-image" />;
}

function Type({ name }) {
  return <div className={`card__type card__type--${name.toLowerCase()}`} />;
}

function Ability({ type, name, text }) {
  return (
    <div className="card__ability">
      <div className="card__ability--header">
        <div className="card__ability--type">{type}</div>
        <div className="card__ability--name">{name}</div>
      </div>
      <div className="card__ability--text">{text}</div>
    </div>
  );
}

function AttackCosts({ cost = [] }) {
  if (!cost || !cost.length) return null;

  return (
    <div className="card__attack--cost">
      {cost.map((type, index) => (
        <div
          key={index}
          className={`card__attack--cost-type card__type--${type.toLowerCase()}`}
        />
      ))}
    </div>
  );
}

function Attack({ cost, name, damage, text }) {
  return (
    <div className="card__attack">
      <div className="card__attack--header">
        <AttackCosts cost={cost} />
        <div className="card__attack--name">{name}</div>
        <div className="card__attack--damage">{damage}</div>
      </div>
      {text && <div className="card__attack--text">{text}</div>}
    </div>
  );
}

function Card(props) {
  const ability = props.ability;
  const weaknesses = props.weaknesses;
  const firstWeakness = weaknesses && weaknesses.length >= 1 && weaknesses[0];
  const bodyClassName = ability ? 'card__body card__body--with-ability' : 'card__body';
  const typeClassName = `card ${props.types[0].toLowerCase()}`;
  return (
    <div className={typeClassName}>
      <div className="card__container">
        <header className="card__header">
          <div className="card__subtype">
            <span className="card__subtype--pill">{props.subtype}</span>
          </div>
          <div className="card__name">{props.name}</div>
          <div className="card__hp">
            <span className="card__hp--text">HP</span>
            <span className="card__hp--value">{props.hp}</span>
          </div>
          <div className="card__types">
            {props.types.map((type) => (
              <Type key={type} name={type} />
            ))}
          </div>
        </header>
        <div className="card__general">
          <div className="card__general--image"></div>
          <div className="card__general--info">
            {props.category} height: {props.height} weight: {props.weight}.
          </div>
        </div>
        <div className={bodyClassName}>
          {props.ability && <Ability {...props.ability} />}
          {props.attacks &&
            props.attacks.map((attack, index) => (
              <Attack key={index} {...attack} />
            ))}
        </div>
        <div className="card__weakness-resistance-retreat">
          <div className="card__weakness-resistance-retreat--weakness">
            weakness{" "}
            {firstWeakness && (
              <>
                <div
                  className={`card__type-small card__type--${firstWeakness.type.toLowerCase()}`}
                />
                <div className="card__weakness--value">
                  {firstWeakness.value}
                </div>
              </>
            )}
          </div>
          <div className="card__weakness-resistance-retreat--resistance">
            resistance
          </div>
          <div className="card__weakness-resistance-retreat--retreat">
            retreat{" "}
            {props.retreatCost &&
              props.retreatCost.length &&
              props.retreatCost.map((cost, index) => {
                return (
                  <div
                    key={index}
                    className={`card__type-small card__type--${cost.toLowerCase()}`}
                  />
                );
              })}
          </div>
        </div>
        <div className="card__description">{props.description}</div>
      </div>
    </div>
  );
}

export default function Both() {
  return (
    <div className="both">
      <CardImage src={card.imageUrlHiRes} />
      <Card {...card} />
    </div>
  );
}
