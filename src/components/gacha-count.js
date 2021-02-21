import React from "react";

class GachaCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    getCount = () => {
        return this.state.count
    }

    plusCount = () => {
        this.setState(state => {
            if (state.count < 10) {
                return { count: state.count + 1 }
            }
        });
    };

    minusCount = () => {
        this.setState(state => {
            if (state.count > 1) {
                return { count: state.count - 1 }
            }
        });
    };

    render() {
        return (
            <div>
                <>回数: {this.state.count} </>
                <button onClick={this.plusCount}>＋</button>
                <button onClick={this.minusCount}>－</button>
            </div>
        )
    }
}

export default GachaCount;