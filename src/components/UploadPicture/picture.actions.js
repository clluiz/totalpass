import * as actions from './picture.actionTypes';

export const setPicture = data => {
  return {
    type: actions.SET_PICTURE,
    payload: data,
  };
};
