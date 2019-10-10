import * as actions from './personalData.actionTypes';

export const setPersonalData = data => {
  return {
    type: actions.SET_PERSONAL_DATA,
    payload: data,
  };
};
