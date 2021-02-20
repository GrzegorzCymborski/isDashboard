import types from './types';

const currentTask = (payload) => ({
  type: types.CURRENT_TASK,
  payload,
});

export default { currentTask };
