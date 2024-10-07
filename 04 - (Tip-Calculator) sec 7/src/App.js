import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [precentage1, setPrecentage1] = useState(0);
  const [precentage2, setPrecentage2] = useState(0);

  const tip = ((precentage1 + precentage2) / 2 / 100) * value;

  function handleReset() {
    setValue("");
    setPrecentage1(0);
    setPrecentage2(0);
  }

  return (
    <div className="App">
      <Bill
        question="How much was the bill ? "
        value={value}
        setValue={setValue}
      />
      <Opinion setPrecentage={setPrecentage1} precentage={precentage1}>
        How did you like the service ?
      </Opinion>

      <Opinion setPrecentage={setPrecentage2} precentage={precentage2}>
        How did your friend like the service ?
      </Opinion>

      {value !== "" && (
        <h2>
          You Pay ${value + tip} (${value} + ${tip} tip)
        </h2>
      )}

      <Reset handleReset={handleReset} />
    </div>
  );
}

export default App;

function Bill({ question, value, setValue }) {
  return (
    <div>
      <span>{question}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
}

function Opinion({ setPrecentage, precentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        onChange={(e) => setPrecentage(Number(e.target.value))}
        value={precentage}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
