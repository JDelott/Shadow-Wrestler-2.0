import React, { useState, useEffect } from 'react';
import "./TimerBox.css";
import Moves from './MovesBox';
import Footer from './Footer';


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
    <div className='timer-space-container'>
    <div className='border-box'>
   
   <div className="timer-container title-center"> 
  <h2 className='title-sw'> Shadow Wrestler </h2>
  <div className='timer-border-box'>
      <div className='timer-display'>
        {minutes < 10 ? `${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
 
      <div >
        <button
          onClick={startTimer}
          disabled={isRunning}
          className={`timer-button  ${isRunning ? 'disabled' : ''}`}
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          disabled={!isRunning}
          className={`timer-button stop-button ${!isRunning ? 'disabled' : ''}`}
        >
          Stop
        </button>
      </div>
      <div>
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
      </div>
      <Moves />
    </div>
    </div>
    </div>
    


  );
}

export default TimerBox;
