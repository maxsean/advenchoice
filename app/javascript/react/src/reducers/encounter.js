const initialState = 0;

const encounter = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ENCOUNTER':
      return action.encounter_id;
    default:
      return state
  }
}

export default encounter;
