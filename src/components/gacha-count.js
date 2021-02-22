import React from "react";

class GachaCount extends React.Component {

    render() {
        return (
            <p>
                <>回数: {this.props.count} </>
                <button onClick={() => this.props.plusCount()}>＋</button>
                <button onClick={() => this.props.minusCount()}>－</button>
            </p>
        )
    }
}

export default GachaCount;