import React, { useEffect, useReducer } from "react";

import "./Form.css";

function TextField({ id, label, value, long, row, onChange }) {
  const TagName = long ? "textarea" : "input";
  row = row ? row : 3;
  return (
    <div className={`field field__${id}`}>
      <label htmlFor={id}>{label}</label>
      <TagName
        id={id}
        name={id}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        rows={long ? row : undefined}
      />
    </div>
  );
}

const ALL_TYPES = [
  "colorless",
  "darkness",
  "dragon",
  "fairy",
  "fighting",
  "fire",
  "grass",
  "lightning",
  "metal",
  "psychic",
  "water",
];

function titleize(string) {
  if (string.length <= 0) return;
  return (
    string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase()
  );
}

function TypeSelect({ id, label, value, onChange }) {
  return (
    <div className={`field field__${id}`}>
      <label htmlFor={id}>Type</label>
      <select name={id} id={id} value={value} onChange={onChange}>
        {ALL_TYPES.map((type) => (
          <option key={type} value={type}>
            {titleize(type)}
          </option>
        ))}
      </select>
    </div>
  );
}

function set(object, path, value) {
  if (object === undefined || path.length === 0)
    throw new Error("set function was misused");
  if (path.length === 1) {
    object[path[0]] = value;
  } else {
    set(object[path[0]], path.slice(1), value);
  }
}

const get = (object) => (path) => {
  if (path.length === 0) return object;
  return get(object[path[0]])(path.slice(1));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      const newState = { ...state };
      set(newState, action.path, action.value);
      return newState;
    }
    case "UPDATE_TYPES": {
      if (action.value.length === 0) return state;
      const newType = action.value[0];
      const attacks = state.attacks.map((attack) => ({
        ...attack,
        cost: attack.cost.map((type) =>
          type.toLowerCase() === "colorless" ? "colorless" : newType
        ),
      }));
      return { ...state, types: action.value, attacks };
    }
    case "UPDATE_ATTACK_COST_ALL": {
      if (action.index > state.attacks.length) return state;
      const attacks = state.attacks.map((attack, index) => {
        if (index !== action.index) return attack;
        return {
          ...attack,
          cost: Array.from({ length: action.value }, (_) => state.types[0]),
        };
      });
      return { ...state, attacks };
    }
    case "UPDATE_ATTACK_COST_COLORLESS": {
      if (action.index > state.attacks.length) return state;
      const attacks = state.attacks.map((attack, index) => {
        if (index !== action.index) return attack;
        const newAttack = { ...attack };
        const cost = newAttack.cost;
        const length = cost.length;
        for (let i = 0; i < length; i++) {
          cost[i] =
            length - action.value - i > 0 ? state.types[0] : "colorless";
        }
        return newAttack;
      });
      return { ...state, attacks };
    }
    default:
      return state;
  }
};

function AttackCost({ total, colorless, onTotalChange, onColorlessChange }) {
  return (
    <div className="field field__attacks-0-cost">
      <label htmlFor="cost-all">Cost </label>
      <select
        name="cost-all"
        id="cost-all"
        value={total}
        onChange={(e) => onTotalChange(parseInt(e.target.value))}
      >
        {Array.from({ length: 5 }, (_, index) => {
          return (
            <option key={index} value={index}>
              {index}
            </option>
          );
        })}
      </select>
      <label htmlFor="cost-colorless">inc. normal </label>
      <select
        name="cost-colorless"
        id="cost-colorless"
        value={colorless}
        onChange={(e) => onColorlessChange(parseInt(e.target.value))}
      >
        {Array.from({ length: total === 0 ? 0 : total + 1 }, (_, index) => {
          return (
            <option key={index} value={index}>
              {index}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default function Form({ initialData, onChange }) {
  /* text */
  const [state, dispatch] = useReducer(reducer, initialData);

  const update = (path) => (value) => dispatch({ type: "UPDATE", path, value });
  const value = get(state);

  const text = (path, long, label, row) => (
    <TextField
      id={path.join("-")}
      label={label || path.map((v) => titleize(v.toString())).join(" ")}
      value={value(path)}
      onChange={update(path)}
      long={long}
      row={row}
    />
  );

  useEffect(() => {
    onChange({
      ...initialData,
      ...state,
    });
  }, [initialData, state, onChange]);

  const firstAttackCost = state.attacks[0].cost;
  const cost = {
    total: firstAttackCost.length,
    colorless: firstAttackCost.filter((x) => x.toLowerCase() === "colorless")
      .length,
  };

  return (
    <form className="form">
      <div className="group">
        {text(["name"])}
        {text(["hp"], false, "HP")}
        <TypeSelect
          id="types"
          label="Type"
          value={state.types[0].toLowerCase()}
          onChange={(e) =>
            dispatch({ type: "UPDATE_TYPES", value: [e.target.value] })
          }
        />
      </div>
      <div className="group">
        {text(["category"])}
        {text(["height"])}
        {text(["weight"])}
      </div>
      <div className="group">
        {text(["ability", "name"])}
        {text(["ability", "text"], true)}
      </div>
      <div className="group">
        {text(["attacks", 0, "name"], false, "Attacks Name")}
        {text(["attacks", 0, "text"], true, "Attacks Text")}
        <AttackCost
          total={cost.total}
          colorless={cost.colorless}
          onTotalChange={(value) =>
            dispatch({
              type: "UPDATE_ATTACK_COST_ALL",
              index: 0,
              value,
            })
          }
          onColorlessChange={(value) =>
            dispatch({
              type: "UPDATE_ATTACK_COST_COLORLESS",
              index: 0,
              value,
            })
          }
        />
        {text(["attacks", 0, "damage"], false, "Attacks Damage")}
      </div>
      <div className="group"></div>
      <div className="group">
        {text(["description"], true, "Description", 2)}
      </div>
    </form>
  );
}
