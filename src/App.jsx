import React from "react";
import "./App.css";
import Header from "./component/Header";
import Balance from "./component/Balance";
import IncExp from "./component/IconExp";
import TransL from "./component/TransL";
import AddTrans from "./component/AddTrans";
import { GlobalProvider } from "./context/GlobalState";
const App = () => {
  return (
    //know that everythin is wrap in the Global Provider
    //the code have accese to the state data
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncExp />
        <TransL />
        <AddTrans />
      </div>
    </GlobalProvider>
  );
};

export default App;
