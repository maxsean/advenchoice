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
    <div className="character-page">
      <div className="character-name">
        {name}
      </div>
      {entries}
    </div>
  );
};

export default CharacterPage;
