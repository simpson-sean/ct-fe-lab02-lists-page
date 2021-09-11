import React, { Component } from 'react';
import { findCharacterById } from '../services/RickAndMortyApi';


export default class CharDetailContainer extends Component {

    state = {
        characterDetails: {},
        loading: true,
    };

    componentDidMount() {
        console.log("hello world");
        findCharacterById(this.props.match.params.id).then((character) =>
        this.setState({ characterDetails: character, loading: false }));
    };

    // getDetails = async () => {
    //     this.setState({ loading: true })
    //     const charId = this.props.match.params.id;
    //     console.log('CHARACTER ID', charId);
    //     const charData = await fetch(`https://rickandmortyapi.com/api/character/${charId}`);
    //     console.log('CHARACTER DATA', charData);
    //     const details = await charData.json();
    //     console.log('DETAILS', details);

    //     this.setState({ characterDetails: details, loading: false });
    // };

    render() {
        console.log(this.state);
        return (
            <div>
                <h3>Character Details</h3>
                <h2>{this.state.characterDetails.name}</h2>
                <h2>{this.state.characterDetails.status}</h2>
                <p>{this.state.characterDetails.image}</p>
            </div>
        )
    }
}