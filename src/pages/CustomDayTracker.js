import { useState, useEffect, useRef } from "react";

export default function CustomDayTracker() {
  const [day, setDay] = useState("Monday");

  /* --- Using the custom hook --- */

  //The  Idea is to pass the prevDay before the component gets updated by the next day with getNextDay method

  const prevDay = usePrevious(day);

  const getNextDay = () => {};

  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Today is: {day}
        <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h1>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
}

// Custom Hook which will preserve the previous state and
// as soon as the button gets clicked and current state is updated
// we'll have the old value of state preserved in our ref.current;

const usePrevious = () => {
  return null;
};
