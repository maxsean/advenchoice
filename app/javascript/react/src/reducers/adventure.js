import { combineReducers } from 'redux'

const initialState = {id: 1, choices: []};

const encounter = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ENCOUNTER':
      return Object.assign({}, state, {
        id: action.encounter.id,
        body: action.encounter.body,
        choices: action.choices
      })
    default:
      return state
  }
}

const traits = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRAIT':
      return [
        ...state,
        action.trait
      ]
    default:
      return state
  }
}

const adventure = combineReducers({
  encounter,
  traits
})

export default adventure;
