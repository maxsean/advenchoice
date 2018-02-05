import { combineReducers } from 'redux';

const initialState = {id: 1, choices: []};

const encounter = (state = initialState, action) => {
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

const traits = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRAIT':
      return [
        ...state,
        action.trait
      ];
    default:
      return state;
  };
};

const journal = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ];
    case 'REMOVE_ITEM':
      let index = state.indexOf(action.item);
      state.splice(index, 1);
      return [
        ...state
      ];
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
  traits,
  journal,
  skills,
  user
});

export default adventure;
