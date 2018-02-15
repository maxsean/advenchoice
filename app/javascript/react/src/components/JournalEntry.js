import React from 'react'

const JournalEntry = (props) => {
  let body = props.body
  let date = props.date
  return(
    <div>
      <div>{date}</div>
      <div>{body}</div>
    </div>
  );
};

export default JournalEntry;
