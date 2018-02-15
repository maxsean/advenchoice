import { combineReducers } from 'redux';

const initialEncounter = {id: 1, choices: []};

const encounter = (state = initialEncounter, action) => {
  switch (action.type) {
    case 'CHANGE_ENCOUNTER':
      return Object.assign({}, state, {
        id: action.encounter.id,
        body: action.encounter.body,
        chapter: action.encounter.chapter,
        choices: action.choices
      });
    default:
      return state;
  };
};

const toggles = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_ON':
      return [
        ...state,
        action.toggle
      ];
    case 'TOGGLE_OFF':
      let index = state.indexOf(action.toggle);
      state.splice(index, 1);
      return [
        ...state
      ];
    default:
      return state;
  };
};

const revelations = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_REV':
      return Object.assign([], state, action.revelations
      );
    default:
      return state;
  };
};

const skills = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      return [
        ...state,
        action.skill
      ];
    default:
      return state;
  };
};

const user = (state = {id: false}, action) => {
  switch (action.type) {
    case 'SWITCH_USER':
      return Object.assign({}, state, {
        id: action.user.id,
        encounter: action.user.encounter
      });
    default:
      return state;
  };
};

const adventure = combineReducers({
  encounter,
  toggles,
  revelations,
  skills,
  user
});

export default adventure;
