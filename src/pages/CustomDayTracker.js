import { useState, useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";

export default function CustomDayTracker() {
  const [day, setDay] = useState("Monday");

  /* --- Using the custom hook --- */
  // The  Idea is to pass the current state (which we can now call prevDay) before the prevState gets updated with setDay, because as soon as the state changes the component re-renders & we'll lost the old state (prevState). To preserve the prevState let's make use of the custom hook usePrevious and pass it prevState (i-e the current state before it gets updated with setDay)

  const prevDay = usePrevious(day);

  const { theme } = useTheme();

  /** --- Logic to update next day --- */
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };

  return (
    <div
      style={{ padding: "40px", color: theme === "light" ? "black" : "white" }}
    >
      <h3>
        Today is: {day}
        <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h3>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
}

// Custom Hook which will preserve the previous state and
// as soon as the button gets clicked and current state is updated
// we'll have the old value of state preserved in our ref.current;
const usePrevious = (day) => {
  const prevDay = useRef();

  useEffect(() => {
    prevDay.current = day;
  }, [day]);
  return prevDay.current;
};
