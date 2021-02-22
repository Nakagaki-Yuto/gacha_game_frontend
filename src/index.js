import React from "react";
import ReactDOM from "react-dom";

import GachaResult from "./components/gacha-result"


const App = () => {

  return (
    <>

      <GachaResult />

    </>
  )
};


ReactDOM.render(<App />, document.getElementById("root"));