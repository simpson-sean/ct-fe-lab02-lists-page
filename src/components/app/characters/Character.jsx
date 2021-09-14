import React from 'react';
import PropTypes from 'prop-types';


const Character = ({ name, status, image, id }) => (
    <>
        <img src={image} alt={name} />
    </>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    status: PropTypes.string,
    image: PropTypes.string.isRequired,
};

export default Character;