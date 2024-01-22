import React, { useState, useEffect } from 'react';
import './MovesBox.css';
import { speak } from './SpeechUtils';

const moves = ['SHOOT', 'SPRAWL', 'BLOCK'];

function Moves() {
  const [currentMove, setCurrentMove] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isCommandsEnabled, setIsCommandsEnabled] = useState(true);

  useEffect(() => {
    const announceMove = () => {
      if (isCommandsEnabled) {
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        setCurrentMove(randomMove);
        if (!isMuted) {
          speak(randomMove);
        }
      }
    };

    const moveInterval = setInterval(announceMove, 3000);

    return () => clearInterval(moveInterval);
  }, [isMuted, isCommandsEnabled]);

  return (
    <div className="moves-container">
      <h2 className="moves-heading">Current Move:</h2>
      <div className="moves-text moves-display">{currentMove}</div>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setIsCommandsEnabled(!isCommandsEnabled)}
            className={`timer-button ${
              isCommandsEnabled ? 'on-button' : 'off-button'
            }`}
          >
            {isCommandsEnabled ? 'On' : 'Off'}
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`timer-button ${
              isMuted
                ? 'moves-mute-button moves-mute-bg'
                : 'moves-unmute-button moves-unmute-bg'
            }`}
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Moves;
