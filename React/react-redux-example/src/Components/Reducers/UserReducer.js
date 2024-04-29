const intialState = { users: [] };
export const userReducer = (state = intialState, action) => {
  const { type, data } = action;
  switch (type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, data] };
    default:
      return state;
  }
};
