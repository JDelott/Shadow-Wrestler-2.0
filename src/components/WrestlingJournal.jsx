// WrestlingJournal.jsx

import React, { useState } from 'react';
import './WrestlingJournal.css';

const WrestlingJournal = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save and display data entries can be added here in the future
    console.log('Time:', time);
    console.log('Date:', date);
    console.log('Notes:', notes);
  };

  return (
    <div className="wrestling-journal-container">
      <h1>Wrestling Journal</h1>
      <form className="journal-entry-form" onSubmit={handleSubmit}>
        <label>
          Time:
          <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <label>
          Date:
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Notes:
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </label>
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default WrestlingJournal;
