import { useState } from "react";
import "./Styles.css";
import { useTheme } from "../ThemeContext";

export default function FeedbackForm() {
  const { theme } = useTheme();
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) <= 5 && comment.length <= 10;
  const placeholderText = isDisabled
    ? "What went wrong, kindly let us know and we can look into it"
    : "Optional Feedback";

  const rangeValues = [...Array(10).keys()].map((i) => i + 1);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="feedback-form"
      style={{ color: theme === "light" ? "black" : "white" }}
    >
      <h1>Feedback Form</h1>

      <div className="field">
        <label htmlFor="score">Score: 🌟</label>
        <input
          type="range"
          name="score"
          id="score"
          min={1}
          max={10}
          value={score}
          list="score-marks"
          onChange={(e) => {
            setScore(e.target.value);
          }}
        />
      </div>

      <datalist id="score-marks">
        {rangeValues.map((val) => (
          <option key={val} value={val} label={val.toString()} />
        ))}
      </datalist>

      <div className="field">
        <label htmlFor="comment">Comment: </label>
        <textarea
          name="comment"
          id="comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          placeholder={placeholderText}
        />
      </div>

      <button type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
}
