import React from "react";
import axios from "axios";

const Character = props => {
    return <p style={{ fontWeight: "bold"}}> {props.children}</p >;
};

class UserCharacters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJfX2luaXRfXyIsIm5hbWUiOiJUYXJvIn0.7h1afKZsOWUqefzzi3rtA64P48f-wvIyJP-85cPVd0s",
            characters: []
        };
    }

    GetUserCharacters = async () => {
        axios({
            method: "get",
            url: "http://localhost:8080/character/list",
            headers: {
                "accept": "application/json",
                "x-token": this.state.token,
            },
        }
        )
            .then(res => this.setState({ characters: res.data.characters }))
            .catch(err => alert(err));
    };



    render() {
        return (
            <div style={{ backgroundColor: "#FCF", padding: "40px", textAlign: "center", margin: "20px 100px" }}>
                <button onClick={this.GetUserCharacters}>所持キャラクターを見る</button>
                {this.state.characters.map(character => (
                    <Character key={character.userCharacterID}>キャラクターID: {character.characterID}&emsp;NAME: {character.name}</Character>
                ))}
            </div>
        );
    }
}

export default UserCharacters;