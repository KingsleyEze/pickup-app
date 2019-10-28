const auth = (state = {}, action) => {
  switch (action.type) {
    case "AUTH_USER":
      console.log(action.userData);
      return {
        ...state,
        id: action.userData.id,
        name: action.userData.username,
        role: action.userData.role
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default auth;
