import * as actions from './app.actionTypes';

const initialState = {
  step : 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_STEP:
      return {
        ...state,
        step : action.payload
      }
    default: 
      return state;
  }
}