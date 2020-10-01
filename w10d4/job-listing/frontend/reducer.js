import { SWITCH_LOCATION } from '../frontend/actions'

const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (state = initialState, action) => {
  // remove this and fill out the body of the reducer function
  Object.freeze(state)
  switch (action.type) {
    case SWITCH_LOCATION:
      let nextState = Object.assign({}, state);      
      nextState.city = action.city;
      nextState.jobs = action.jobs;
      return nextState
    default:
      return state
  }
};

window.reducer = reducer

export default reducer;
