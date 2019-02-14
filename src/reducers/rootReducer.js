const initState = {
  user: {},
  messages: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: action.user
      };
    case "ADD_MSG":
      return {
        ...state,
        messages: [...state.messages, action.messages]
      };
    case "INIT_DATA":
      return {
        ...state,
        messages: action.messages
      };
    default:
      return {...state};
  }
};

export default rootReducer;
