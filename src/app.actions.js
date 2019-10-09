import * as actions from './app.actionTypes';

export const setStep = (step) => {
  return {
    type    : actions.SET_STEP,
    payload : step
  }
}