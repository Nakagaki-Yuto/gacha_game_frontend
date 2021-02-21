import React from "react";
import ReactDOM from "react-dom";

import GachaResult from "./components/gacha-result"
import GachaCount from "./components/gacha-count"

// const App = () => {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  getCount() {
    this.setState({
      count: this.refs.GachaCount.getCount()
    });
  }

  render() {
    return (
      <>
        <p window={this.getCount.bind(this)}></p>
        <GachaCount />
        <p>{this.state.count}</p>
        <GachaResult count={this.state.count} token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJfX2luaXRfXyIsIm5hbWUiOiJUYXJvIn0.7h1afKZsOWUqefzzi3rtA64P48f-wvIyJP-85cPVd0s" />

      </>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("root"));