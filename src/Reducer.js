const initialState = {
  counter: 20,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };

    case "RESET":
      return {
        counter: 0,
      };

    default:
      return {counter: state.counter};
  }
};
