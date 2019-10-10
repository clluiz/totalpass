import * as actions from './plan.actionTypes';

export const goToPlan = (index) => {
  return {
    type    : actions.GO_TO_PLAN,
    payload : index
  }
}