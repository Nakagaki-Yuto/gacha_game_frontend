import React from "react";
import axios from "axios";

import GachaCount from "./gacha-count"

const Character = props => {
    return <p style={{ fontWeight: "bold"}}> {props.children}</p >;
};

class GachaResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJfX2luaXRfXyIsIm5hbWUiOiJUYXJvIn0.7h1afKZsOWUqefzzi3rtA64P48f-wvIyJP-85cPVd0s",
            results: []
        };
    }

    drawGacha = async () => {
        axios({
            method: "post",
            url: "http://localhost:8080/gacha/draw",
            headers: {
                "accept": "application/json",
                "x-token": this.state.token,
                "Content-Type": "application/json",
            },
            data: JSON.stringify({
                "times": this.state.count
            }),
        }
        )
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => alert(err));
    };

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
            <div style={{ backgroundColor: "#CFF", padding: "40px", textAlign: "center", margin: "20px 100px" }}>
                <button onClick={this.drawGacha}>ガチャを引く [ {this.state.count} 回 ] </button>
                <GachaCount
                    plusCount={() => this.plusCount()}
                    minusCount={() => this.minusCount()}
                />
                {this.state.results.map((result, i) => (
                    <Character key={i}>キャラクターID: {result.characterID}&emsp;NAME: {result.name}</Character>
                ))}
            </div>
        );
    }
}

export default GachaResult;