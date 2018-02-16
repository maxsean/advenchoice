import React from 'react'

const JournalEntry = (props) => {
  let body = props.body
  let date = props.date
  return(
    <div className="journal-entry">
      <div>Date: {date}</div>
      <div>{body}</div>
    </div>
  );
};

export default JournalEntry;
