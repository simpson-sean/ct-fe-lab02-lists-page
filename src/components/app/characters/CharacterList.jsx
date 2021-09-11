import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character.jsx';


const CharacterList = ({ characters }) => (
    <ul aria-label = "characters">
        {characters.map((character) => (
        <div key={character.id} className="cards"> 
            <li>
                <Character 
                    name={character.name}
                    status={character.status}
                    image={character.image}
                    id={character.id}
                />
            </li>
        </div>
        ))}
    </ul>
);

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CharacterList;
