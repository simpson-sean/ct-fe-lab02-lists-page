import React, {Component } from 'react';
import { findCharacters } from '../services/RickAndMortyApi.js';
import CharacterList from '../components/app/characters/CharacterList.jsx';

export default class RickAndMortyContainer extends Component {
    state = {
        loading: true,
        characters: [],
    };

    componentDidMount() {
        findCharacters().then((characters) => 
          this.setState({ characters, loading: false })
        );
    }


    render() {
        const { loading, characters } = this.state;

        if (loading) {
          return (
            <img
                src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C?v=v2"
                alt="loading spinner"
            />    
        );
    }

    return <CharacterList characters={characters} />;
    } 
}