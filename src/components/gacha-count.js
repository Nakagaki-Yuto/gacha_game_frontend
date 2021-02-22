import React from "react";

class GachaCount extends React.Component {

    render() {
        return (
            <div>
                <button onClick={() => this.props.plusCount()}>＋</button>
                <button onClick={() => this.props.minusCount()}>－</button>
                <> </>
            </div>
        )
    }
}

export default GachaCount;