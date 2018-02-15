import React from 'react';
import JournalEntry from './JournalEntry'

const CharacterPage = (props) => {
  let entries;
  if(props.entries) {
    entries = props.entries.map(entry => {
      return(
        <JournalEntry
          key = {entry.journal.id}
          body = {entry.journal.body}
          date = {entry.journal.date}
        />
      );
    });
  };
  name = props.name
  return(
    <div>
      <div>
        {name}
      </div>
      {entries}
    </div>
  );
};

export default CharacterPage;
