import * as actions from './plan.actionTypes';

const initialState = {
  plan : null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_PLAN:
      return {
        ...state,
        plan : action.payload
      }
    default :
      return state;
  }
}