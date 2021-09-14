import React, { Component } from 'react';
import { findCharacterById } from '../services/RickAndMortyApi';
import { NavLink } from 'react-router-dom';


export default class CharDetailContainer extends Component {

    state = {
        characterDetails: {},
        loading: true,
    };

    componentDidMount() {
        findCharacterById(this.props.match.params.id).then((character) =>
        this.setState({ characterDetails: character, loading: false }));
    };

    render() {
        return (
            <div data-testid="testing-div">
                <h1>Character Details</h1>
                <center>
                    <img src={this.state.characterDetails.image} id='card'></img>
                </center>
                <h2>Name: {this.state.characterDetails.name}</h2>
                <h2>Status: {this.state.characterDetails.status}</h2>
                <NavLink className='nav-links' exact to="/">Home</NavLink>
            </div>
        )
    }
}