import React from "react";

const Filters = (props) => {
  return (
    <div className="filters">
      <input
        type="checkbox"
        className="checkbox"
        checked={props.difficulty}
        onChange={(event) => props.setStateDifficulty(event.target.checked)}
      ></input>
      {props.difficulty} Difficulty
      <input
        type="checkbox"
        className="checkbox"
        checked={props.fun}
        onChange={(event) => props.setStateFun(event.target.checked)}
      ></input>
      {props.fun} Fun
    </div>
  );
};

export default Filters;
