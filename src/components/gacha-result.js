import React from "react";
import axios from "axios";

const CharacterName = props => {
    return <p style={{ backgroundColor: "#CCC" }} key = { props.characterID } > { props.children }</p >;
};

class GachaResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
            token: props.token,
            gachaResults: []
        };
    }

    drawGacha = async () => {
        axios({
            method: "post",
            url: "http://localhost:8080/gacha/draw",
            headers: {
                "accept": "application/json",
                // "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJfX2luaXRfXyIsIm5hbWUiOiJUYXJvIn0.7h1afKZsOWUqefzzi3rtA64P48f-wvIyJP-85cPVd0s",
                "x-token": this.state.token,
                "Content-Type": "application/json",
            },
            data: JSON.stringify({
                // "times": 1
                "times": this.state.count
            }),
        }
        )
            .then(res => this.setState({ gachaResults: res.data.results }))
            .catch(err => alert(err));
    };

    render() {
        return (
            <p>
                <button onClick={this.drawGacha}>ガチャを引く</button>
                {this.state.gachaResults.map((result, i) => (
                    <CharacterName key={i}>キャラクターID: {result.characterID}&emsp;NAME: {result.name}</CharacterName>
                ))}
            </p>
        );
    }
}

export default GachaResult;