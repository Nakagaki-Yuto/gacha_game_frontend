import React from "react";

class GachaCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState(state => {
            return { count: state.count + 1 }
        });
    };

    render() {
        return <button onClick={this.handleClick}>ガチャ回数：{this.state.count}</button>;
    }
}

export default GachaCount;