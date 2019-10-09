import * as actions from "./app.actionTypes";

const initialState = {
  step: 0,
  steps: [
    {
      description: "Dados pessoais"
    },
    {
      description: "Endereço"
    },
    {
      description: "Plano"
    },
    {
      description: ""
    }
  ],
  plans: [
    {
      name: "Fit",
      value: 200
    },
    {
      name: "Omega",
      value: 300
    },
    {
      name: "Beta",
      value: 400
    },
    {
      name: "Ultra",
      value: 500
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_STEP:
      return {
        ...state,
        step: action.payload
      };
    default:
      return state;
  }
};
