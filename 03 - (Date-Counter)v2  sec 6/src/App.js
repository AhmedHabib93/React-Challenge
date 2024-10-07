import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate());
  return (
    <div className="App">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
      </div>
      <div>
        <button onClick={() => setCount((prev) => prev - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((prev) => prev + step)}>+</button>
      </div>
      <h3>
        {" "}
        {count} days from today is {date.toDateString()}
      </h3>
      {count !== 0 || step !== 1 ? (
        <button onClick={() => setCount(0) | setStep(1)}>Reset</button>
      ) : null}
    </div>
  );
}
