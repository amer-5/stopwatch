import { useState, useRef } from "react";

const Component = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const timer = useRef();
  const interval = useRef();

  function start() {
    if (!isRunning) {
      setIsRunning(true);
      timer.current = Date.now() - time;
      interval.current = setInterval(() => {
        setTime(Date.now() - timer.current);
      }, 10);
    }
  }

  function stop() {
    setIsRunning(false);
    clearInterval(interval.current);
  }

  function reset() {
    setIsRunning(false);
    clearInterval(interval.current);
    setTime(0);
  }

  const minute = Math.floor(time / 1000 / 60);
  const seconds = Math.floor((time / 1000) % 60);
  const milliseconds = Math.floor((time % 1000) / 10);

  const timeText = `${String(minute).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;

  return (
    <div className="stopwatch">
      <p className="time">{timeText}</p>
      <div className="buttons">
        <button onClick={start} className="start-button">
          Start
        </button>
        <button onClick={reset} className="reset-button">
          Reset
        </button>
        <button onClick={stop} className="stop-button">
          Stop
        </button>
      </div>
    </div>
  );
};

export default Component;
