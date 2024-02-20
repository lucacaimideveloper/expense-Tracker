import React, { useContext } from "react";
import Transaction from "./Transaction";
//importing the state
import { GlobalContext } from "../context/GlobalState";
const TransL = () => {
  const { transaction } = useContext(GlobalContext);

  // console.log(context);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransL;
