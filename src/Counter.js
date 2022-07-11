import React from "react";

import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const countCounter= useSelector(state => state.counter);
  console.log(countCounter)

  return (
    <div>
      <div>{countCounter}</div>
      <div>
        <button type="button" onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <button type="button" onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button>
        <button type="button" onClick={() => dispatch({ type: "RESET" })}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default Counter;
