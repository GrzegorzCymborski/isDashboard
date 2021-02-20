import types from "./types";

const currentTask = (payload) => ({
  type: types.CURRENT_TASK,
  payload,
});

const actions = {
  currentTask,
};

export default actions;
