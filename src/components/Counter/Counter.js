import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Counter.module.css";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `${count} `;
  });

  return (
    <div className={style.counter}>
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}

      <button onClick={() => dispatch(increment())}>+</button>
      <span>count: {count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
