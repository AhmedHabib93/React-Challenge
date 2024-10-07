import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState();
  const [fromValue, setFromValue] = useState("EUR");
  const [toValue, setToValue] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCurrency() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${fromValue}&to=${toValue}`
        );
        const data = await res.json();
        setConverted(data.rates[toValue]);
        setIsLoading(false);
      }

      if (fromValue === toValue) return setConverted(value);

      fetchCurrency();

      return function () {
        controller.abort();
      };
    },
    [fromValue, toValue, value]
  );

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromValue}
        onChange={(e) => setFromValue(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toValue}
        onChange={(e) => setToValue(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted} {toValue}
      </p>
    </div>
  );
}
