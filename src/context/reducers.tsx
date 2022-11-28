export const resolveUsersAndReturnInitialState = async () => {
  // do something async if needed here and return the initial state
  let initialState = {
    locale: "en",
  };

  return initialState;
};

export const reducer = (
  state = resolveUsersAndReturnInitialState(),
  action: {
    type: string;
    payload: any;
  }
) => {
  console.log(action);
  switch (action.type) {
    case "SET_LOCALE":
      return {
        ...state,
        locale: action.payload,
      };

    default:
      return state;
  }
};
