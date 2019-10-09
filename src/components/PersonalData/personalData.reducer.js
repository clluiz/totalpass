import * as actions from './personalData.actionTypes';

const initialState = {
  name      : '',
  taxNumber : '',
  phone     : '',
  birthday  : '',
  gender    : ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_PERSONAL_DATA:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};