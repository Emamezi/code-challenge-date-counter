import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
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

  const resetHandler = () => {
    setSteps(1);
    setCount(0);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="steps">
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={steps}
          onChange={(e) => {
            setSteps(Number(e.target.value));
          }}
        />
        {steps}
      </div>
      <div className="count-container">
        <button onClick={decreaseCountHandler}> ➖</button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
        />
        <button onClick={increaseCountHandler}>➕</button>
      </div>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : ` ${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>

      {count !== 0 || steps !== 1 ? (
        <div>
          <button className="btn-reset" onClick={resetHandler}>
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
};
