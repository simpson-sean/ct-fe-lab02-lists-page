import React, { Component } from 'react';

export default class CharDetailContainer extends Component {

    state = {
        characterDetails: {},
        loading: false,
    };

    componentDidMount() {
        this.getDetails();
    };

    getDetails = async () => {
        this.setState({ loading: true })
        const charId = this.props.match.params.charId;
        const charData = await fetch(`https://rickandmortyapi.com/api/character/${charId}`);
        const details = await charData.json();

        this.setState( {details} );
    };

    render() {
        return (
            <div>
                <h3>Character Details</h3>
                {/* <h2>{this.props.match.params.id}</h2>
                {/* <h2>{this.props.characterDetails.name}</h2>
                <h2>{this.props.characterDetails.status}</h2>
                <p>{this.props.characterDetails.image}</p> */} */}
            </div>
        )
    }
}