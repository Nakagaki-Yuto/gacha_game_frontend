import React from "react";
import ReactDOM from "react-dom";

import GachaResult from "./components/gacha-result"
import UserCharacters from "./components/user-characters"


const App = () => {

  return (
    <>

      <GachaResult />
      <UserCharacters />

    </>
  )
};


ReactDOM.render(<App />, document.getElementById("root"));