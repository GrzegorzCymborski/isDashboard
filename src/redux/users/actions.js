import types from "./types";

const fetchUsers = (payload) => ({
  type: types.FETCH_USERS,
  payload,
});

const addUser = (payload) => ({
  type: types.ADD_USER,
  payload,
});

const deleteUser = (payload) => ({
  type: types.DELETE_USER,
  payload,
});

const editUser = (payload) => ({
  type: types.EDIT_USER,
  payload,
});

const sortUsers = (payload) => ({
  type: types.SORT_USER,
  payload,
});

const actions = {
  fetchUsers,
  addUser,
  deleteUser,
  editUser,
  sortUsers,
};

export default actions;
