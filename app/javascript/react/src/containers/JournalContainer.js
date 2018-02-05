import React from 'react';

const JournalContainer = (props) => {
  let journal = props.journal.map(item => {
    return(
      <li key={String(Date.now()) + '-' + props.journal.indexOf(item)}>
        {item}
      </li>
    );
  });
  return(
    <div className="journal-container">
      <div className="status-label">
        <h3>Journal</h3>
      </div>
      <ul>
        {journal}
      </ul>
    </div>
  );
};

export default JournalContainer;
