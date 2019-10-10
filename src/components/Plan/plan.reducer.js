import * as actions from './plan.actionTypes';

const initialState = {
  selectedPlan : 0,
  gif: '',
  plans: [
    {
      title: "Mega",
      description: "Plano Mega",
      price: 100
    },
    {
      title: "Fit",
      description: "Plano Fit +",
      price: 200
    },
    {
      title: "Omega",
      description: "Plano Omega",
      price: 300
    },
    {
      title: "Beta",
      description: "Plano Beta",
      price: 400
    },
    {
      title: "Ultra",
      description: "Plano Ultra",
      price: 500
    }
  ]
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.GO_TO_PLAN:
      return {
        ...state,
        selectedPlan : action.payload
      }
    case actions.SET_GIF:
      return {
        ...state,
        gif : action.payload
      }
    default :
      return state;
  }
}