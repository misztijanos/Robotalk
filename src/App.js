import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="headline">Time the Robotalk</h1>
      <div className="phrases">
        <div className="phrase">
          <input className="num-input" type="number" />
          <input className="text-input" type="text" />
        </div>
        <div className="phrase">
          <input className="num-input" type="number" />
          <input className="text-input" type="text" />
        </div>
      </div>
      <button>Add</button>
      <h1 className="timer">0</h1>
      <button className="start">Start</button>
      <button className="stop">Stop</button>
    </div>
  );
}

export default App;
