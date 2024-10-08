import { useReducer } from "react";
import "./styles.css";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "open":
      return { ...state, isActive: true, balance: 500 };
    case "close":
      return initialState;
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "requestLoan":
      return {
        ...state,
        loan: state.loan + action.payload,
        balance: state.balance + action.payload,
      };
    case "payLoan":
      return { ...state, loan: 0, balance: state.balance - state.loan };
    default:
      throw new Error("unknown");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      {!isActive ? (
        <p>
          <button
            onClick={() => {
              dispatch({ type: "open" });
            }}
          >
            Open account
          </button>
        </p>
      ) : (
        <>
          <p>
            <button
              onClick={() => {
                dispatch({ type: "deposit", payload: 150 });
              }}
            >
              Deposit 150
            </button>
          </p>
          <p>
            <button
              onClick={() => {
                dispatch({ type: "withdraw", payload: 50 });
              }}
              disabled={balance < 50}
            >
              Withdraw 50
            </button>
          </p>
          <p>
            <button
              onClick={() => {
                dispatch({ type: "requestLoan", payload: 5000 });
              }}
              disabled={loan}
            >
              Request a loan of 5000
            </button>
          </p>
          <p>
            <button
              onClick={() => {
                dispatch({ type: "payLoan" });
              }}
              disabled={!loan}
            >
              Pay loan
            </button>
          </p>
          <p>
            <button
              onClick={() => {
                dispatch({ type: "close" });
              }}
              disabled={loan > 0 || balance > 0}
            >
              Close account
            </button>
          </p>
        </>
      )}
    </div>
  );
}
