import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counter/counterSlice";

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(decrement())}>less</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>add</button>
    </>
  );
}

export default App;
