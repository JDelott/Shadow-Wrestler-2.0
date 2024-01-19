import React, { useState, useEffect } from 'react';
import "./TimerBox.css";
import Moves from './MovesBox';

function TimerBox() {
  const [totalSeconds, setTotalSeconds] = useState(300);
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setRemainingSeconds(totalSeconds);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setRemainingSeconds(totalSeconds);
  };

  useEffect(() => {
    let interval;

    if (isRunning && remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (remainingSeconds === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, remainingSeconds, totalSeconds]);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    
  
    <div className="timer-container title-center"> Shadow Wrestler
      <p className="timer-text timer-text-lg">
        {minutes < 10 ? `${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <div className="space-x-4">
        <button
          onClick={startTimer}
          disabled={isRunning}
          className={`timer-button ${isRunning ? 'disabled' : ''}`}
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          disabled={!isRunning}
          className={`timer-button ${!isRunning ? 'disabled' : ''}`}
        >
          Stop
        </button>
      </div>
      <div className="mt-4">
        <label className="timer-label">
          <h2 className="timer-heading font-bold set-timer-duration-text">Set Time:</h2>
          <input
            type="number"
            min="1"
            step="1"
            value={totalSeconds / 60}
            onChange={(e) => setTotalSeconds(parseInt(e.target.value) * 60)}
            className="mt-2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 w-20 input"
            placeholder="min"
          />
        </label>
      </div>
      <Moves />
    </div>
  
  );
}

export default TimerBox;
