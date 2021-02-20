import types from "./types";

const INITIAL_STATE = {};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CURRENT_TASK:
      return {...action.payload[0]};
    default:
      return state;
  }
};

export default taskReducer;
