import React from "react";

import "./Card.css";

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

function CardHeader({ subtype, name, hp, types }) {
  return (
    <header className="card__header">
      <div className="card__subtype">
        <span className="card__subtype--pill">{subtype}</span>
      </div>
      <div className="card__name">{name}</div>
      <div className="card__hp">
        <span className="card__hp--text">HP</span>
        <span className="card__hp--value">{hp}</span>
      </div>
      <div className="card__types">
        {types.map((type) => (
          <Type key={type} name={type} />
        ))}
      </div>
    </header>
  );
}

function CardGeneral({ category, height, weight }) {
  return (
    <div className="card__general">
      <div className="card__general--image"></div>
      <div className="card__general--info">
        {category} height: {height} weight: {weight}.
      </div>
    </div>
  );
}

function CardBody({ ability, attacks }) {
  const bodyClassName = ability
    ? "card__body card__body--with-ability"
    : "card__body";
  return (
    <div className={bodyClassName}>
      {ability && <Ability {...ability} />}
      {attacks &&
        attacks.map((attack, index) => <Attack key={index} {...attack} />)}
    </div>
  );
}

function CardWeaknessResistance({ element, type, className }) {
  return (
    <div className="card__footer--item">
      {type}{" "}
      {element && (
        <>
          <div
            className={`card__type-small card__type--${element.type.toLowerCase()}`}
          />
          <div className="card__footer--value">{element.value}</div>
        </>
      )}
    </div>
  );
}

function CardWeaknessResistanceRetreat({
  weaknesses,
  resistances,
  retreatCost,
}) {
  const firstWeakness = weaknesses && weaknesses.length >= 1 && weaknesses[0];
  const firstResistance =
    resistances && resistances.length >= 1 && resistances[0];

  return (
    <div className="card__footer">
      <CardWeaknessResistance
        type="weakness"
        element={firstWeakness}
      />
      <CardWeaknessResistance
        type="resistance"
        element={firstResistance}
      />
      <div className="card__footer--item">
        retreat{" "}
        {retreatCost &&
          retreatCost.length > 0 &&
          retreatCost.map((cost, index) => {
            return (
              <div
                key={index}
                className={`card__type-small card__type--${cost.toLowerCase()}`}
              />
            );
          })}
      </div>
    </div>
  );
}

export default function Card(props) {
  const { types } = props;
  const typeClassName = `card ${types[0].toLowerCase()}`;
  return (
    <div className={typeClassName}>
      <div className="card__container">
        <CardHeader
          subtype={props.subtype}
          name={props.name}
          hp={props.hp}
          types={types}
        />
        <CardGeneral
          category={props.category}
          height={props.height}
          weight={props.weight}
        />
        <CardBody ability={props.ability} attacks={props.attacks} />
        <CardWeaknessResistanceRetreat
          weaknesses={props.weaknesses}
          resistances={props.resistances}
          retreatCost={props.retreatCost}
        />
        <div className="card__description">{props.description}</div>
      </div>
    </div>
  );
}
