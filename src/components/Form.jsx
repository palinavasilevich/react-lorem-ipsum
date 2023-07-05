import React, { useState } from "react";

const MIN_AMOUNT = 1;
const MAX_AMOUNT = 8;

const Form = ({ onSubmit }) => {
  const [count, setCount] = useState(MIN_AMOUNT);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(count);
  };

  return (
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">Paragraphs:</label>
      <input
        type="number"
        name="amount"
        id="amount"
        min={MIN_AMOUNT}
        step="1"
        max={MAX_AMOUNT}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />

      <button type="submit" className="btn">
        Generate
      </button>
    </form>
  );
};

export default Form;
