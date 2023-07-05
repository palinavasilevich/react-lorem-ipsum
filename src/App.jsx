import { useState } from "react";
import { nanoid } from "nanoid";

import Form from "./components/Form";

import data from "./data";

const App = () => {
  const [text, setText] = useState(data ? data.slice(0, 1) : []);

  const onSubmit = (count) => {
    let amount = parseInt(count);
    const slicedText = data.slice(0, amount);
    setText(slicedText);
  };

  return (
    <main>
      <section className="section-center">
        <h4>TIRED OF BORING LOREM IPSUM?</h4>
        <Form onSubmit={onSubmit} />
        <article className="lorem-text">
          {text.map((paragraph) => {
            const id = nanoid();

            return <p key={id}>{paragraph}</p>;
          })}
        </article>
      </section>
    </main>
  );
};
export default App;
