import "./App.css";
import useTimer from "./hooks/useTimer";

function App() {
  const { start, seconds } = useTimer(5);
  return (
    <div>
      <h2>{seconds}</h2>
      <button onClick={start}>Start Timer</button>
    </div>
  );
}

export default App;
