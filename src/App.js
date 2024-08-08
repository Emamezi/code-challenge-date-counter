import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="steps">
      <Counter />
    </div>
  );
}

export default App;

const Counter = () => {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  const increaseCountHandler = () => {
    setCount((count) => count + steps);
  };
  const decreaseCountHandler = () => {
    setCount((count) => count - steps);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setSteps(steps - 1);
          }}
        >
          -
        </button>
        <span>Steps: {steps} </span>
        <button
          onClick={() => {
            setSteps(steps + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button onClick={decreaseCountHandler}>-</button>
        <span>Count: {count} </span>
        <button onClick={increaseCountHandler}>+</button>
      </div>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
};
