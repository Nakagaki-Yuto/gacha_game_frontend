import React from "react";
import ReactDOM from "react-dom";

import GachaResult from "./components/gacha-result"
import GachaCount from "./components/gacha-count"


const App = () => {
  return (
    <>
      <GachaCount />
      <GachaResult count="3" token="xxx" />
    </>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));