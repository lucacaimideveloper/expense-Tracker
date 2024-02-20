import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transaction: [
    { id: 1, text: "Flowers", amount: -20 },
    { id: 2, text: "Salary", amount: 200 },
    { id: 3, text: "Coffe", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//create global context

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  //where we start using the reducer
  //we can accese state value
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  //global provider allowd u to acces the obj transaction from any component of the app
  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
