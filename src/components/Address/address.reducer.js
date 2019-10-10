import * as actions from './address.actionTypes';

const initialState = {
  zipCode: '',
  address: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ADDRESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
