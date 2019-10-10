import * as actions from './plan.actionTypes';

export const setPlan = (plan) => {
  return {
    type     : actions.SET_PLAN,
    paylooad : plan
  }
}