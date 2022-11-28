import data from "../../public/assets/data.json";
export const resolveUsersAndReturnInitialState = async () => {
  // do something async if needed here and return the initial state
  let initialState = {
    locale: "en",
    qeas: data,
    f_qeas: null,
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
    case "SET_QEA":
      return {
        ...state,
        qeas: action.payload,
      };
    case "SET_F_QEA":
      return {
        ...state,
        f_qeas: action.payload,
      };

    default:
      return state;
  }
};
