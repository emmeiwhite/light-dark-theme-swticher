import { useReducer } from "react";
import { useTheme } from "../ThemeContext";

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

  if (action.type === "celebrity_visit") {
    return { ...state, moneyForWeek: state.moneyForWeek + action.payload };
  }
};

export default function ExpenseTracker() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { theme } = useTheme();

  const handleBuying = () => {
    dispatch({ type: "buy_stuff", payload: 10 });
  };

  const handleSelling = () => {
    dispatch({ type: "sell_meal", payload: 15 });
  };

  const handleCelebrity = () => {
    dispatch({ type: "sell_meal", payload: 5000 });
  };
  return (
    <div style={{ color: theme === "light" ? "black" : "white" }}>
      <h1>Currently Weekly Money :{state.moneyForWeek}</h1>
      <button onClick={handleBuying}>Buy Veggies for $10</button>
      <button onClick={handleSelling}>Sell meals for $15</button>
      <button onClick={handleCelebrity}>hosting a celebrity</button>
    </div>
  );
}
