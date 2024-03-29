// ParentComponent.js

import React from 'react';
import TimerBox from './TimerBox';
import TitleBox from './TitleBox';


import './ParentBox.css';

function ParentBox() {
  return (
    <div className='upper-space'>
      <TitleBox />
      <div className="parent-container">
        {/* Render TimerBox and Moves components */}
        <TimerBox />
      
      </div>
      {/* <Moves /> */}
    </div>
  );
}

export default ParentBox;
