import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(step);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="App">
      <div>
        <button onClick={() => setStep((prev) => prev - 1)}>-</button>
        <strong> Step : {step} </strong>
        <button onClick={() => setStep((prev) => prev + 1)}>+</button>
      </div>
      <br />
      <div>
        <button onClick={() => setCount((prev) => prev - step)}>-</button>
        <span>
          <strong> Count :{count} </strong>
        </span>
        <button onClick={() => setCount((prev) => prev + step)}>+</button>
      </div>
      <p>
        {Math.abs(count)} days {count < 0 ? "ago today was" : "from today is"}{" "}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
