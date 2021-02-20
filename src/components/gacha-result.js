import React from "react";
import axios from "axios";

class GachaResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
            token: props.token
        };
    }

    drawGacha = async () => {
        const res = await fetch("http://localhost:8080/gacha/draw", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJfX2luaXRfXyIsIm5hbWUiOiJUYXJvIn0.7h1afKZsOWUqefzzi3rtA64P48f-wvIyJP-85cPVd0s",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "times": 1
            })
        })
            .then(res => console.log(res))
            .catch(err => alert(err));
    };

    render() {
        return (
            <>
                <button onClick={this.drawGacha}>ガチャを引く</button>
            </>
        );
    }
}

export default GachaResult;