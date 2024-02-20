import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <>
      {/* ternary to choose the color of the lines */}
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {/* math.abs make an absolute number so it will be always positive */}
          {sign}£{Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}>
          X
        </button>
      </li>
    </>
  );
};

export default Transaction;
