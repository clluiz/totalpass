import * as actions from './picture.actionTypes';

const initialState = {
  src : null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_PICTURE:
      return {
        ...state,
        src : action.payload
      }
    default:
      return state;
  }
}