//is how we specify the app state changes
// in to action to hour context
//
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transaction: state.transaction.filter((transaction) => {
          return transaction.id !== action.payload;
        }),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    default:
      return state;
  }
};
