import { useState } from "react";
import "./App.css";
import Phrase from "./Phrase";

function App() {
  const [phrases, setPhrases] = useState([
    { time: 1, text: "Hi!" },
    { time: 2, text: "Type your text here." },
  ]);

  function handleChange(index, e) {
    const newPhrases = [...phrases];
    //the number needs some validation
    e.target.type === "number" &&
      (newPhrases[index].time = Number(e.target.value));
    newPhrases[index].time < 0 && (newPhrases[index].time = 0);

    e.target.type === "text" && (newPhrases[index].text = e.target.value);

    setPhrases(newPhrases);
  }

  function handleAdd() {
    const newPhrases =
      phrases.length === 0
        ? [{ time: 1, text: "Hi!" }]
        : [
            ...phrases,
            { time: phrases[phrases.length - 1].time + 1, text: "" },
          ];
    setPhrases(newPhrases);
  }

  function handleDelete(index) {
    const newPhrases = [...phrases];
    newPhrases.splice(index, 1);
    setPhrases(newPhrases);
  }

  return (
    <div className="container">
      <h1 className="headline">Time the Robotalk</h1>
      <div className="phrases">
        {phrases.map((phrase, index) => (
          <Phrase
            phrases={phrases}
            index={index}
            key={index}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <button onClick={handleAdd}>Add</button>
      <h1 className="timer">0</h1>
      <button className="start">Start</button>
      <button className="stop">Stop</button>
    </div>
  );
}

export default App;
