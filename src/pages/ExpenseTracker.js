import { useReducer } from "react";

const initialState = {
  moneyForWeek: 1000,
};

const reducer = (state, action) => {
  if (action.type === "buy_stuff") {
    return { ...state, moneyForWeek: state.moneyForWeek - action.payload };
  }

  if (action.type === "sell_meal") {
    return { ...state, moneyForWeek: state.moneyForWeek + action.payload };
  }
};

export default function ExpenseTracker() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleBuying = () => {
    dispatch({ type: "buy_stuff", payload: 10 });
  };

  const handleSelling = () => {
    dispatch({ type: "sell_meal", payload: 15 });
  };
  return (
    <div>
      <h1>Currently Weekly Money :{state.moneyForWeek}</h1>
      <button onClick={handleBuying}>Buy Veggies for $10</button>
      <button onClick={handleSelling}>Sell meals for $15</button>
    </div>
  );
}
