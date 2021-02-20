import types from "./types";

const INITIAL_STATE = [];

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      return [...action.payload];
    case types.ADD_USER:
      return [...state, action.payload];
    case types.DELETE_USER:
      return [...state.filter((item) => item.id !== action.payload)];
    case types.SORT_USER:
      switch (action.payload) {
        case "id_asc":
          return [...state.sort((a, b) => a.id - b.id)];
        case "name_asc":
          return [...state.sort((a, b) => a.name.localeCompare(b.name))];
        case "email_asc":
          return [...state.sort((a, b) => a.email.localeCompare(b.email))];
        case "username_asc":
          return [
            ...state.sort((a, b) => a.username.localeCompare(b.username)),
          ];
        case "city_asc":
          return [
            ...state.sort((a, b) =>
              a.address.city.localeCompare(b.address.city)
            ),
          ];
        default:
          return state.reverse();
      }
    case types.EDIT_USER:
      return [
        ...state.filter((item) => item.id !== action.payload.id),
        action.payload,
      ].sort((a, b) => a.id - b.id);
    default:
      return state;
  }
};

export default usersReducer;
