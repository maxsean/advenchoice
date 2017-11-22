const initialState = {encounter: {id: 1}, choices: []};

const encounter = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ENCOUNTER':
      return Object.assign({}, state, {
        encounter: action.encounter,
        choices: action.choices
      })
    default:
      return state
  }
}

export default encounter;
