import React from "react";
import axios from "axios";

import GachaCount from "./gacha-count"

const CharacterName = props => {
    return <p style={{ backgroundColor: "#CCC" }} key={props.characterID} > {props.children}</p >;
};

class GachaResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJfX2luaXRfXyIsIm5hbWUiOiJUYXJvIn0.7h1afKZsOWUqefzzi3rtA64P48f-wvIyJP-85cPVd0s",
            gachaResults: []
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
            .then(res => this.setState({ gachaResults: res.data.results }))
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
            <>
                <GachaCount
                    count={this.state.count}
                    plusCount={() => this.plusCount()}
                    minusCount={() => this.minusCount()}
                />
                <button onClick={this.drawGacha}>ガチャを引く</button>
                {this.state.gachaResults.map((result, i) => (
                    <CharacterName key={i}>キャラクターID: {result.characterID}&emsp;NAME: {result.name}</CharacterName>
                ))}
            </>
        );
    }
}

export default GachaResult;