import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, status, image, id }) => (
    <>
        <Link to={`/${id}`}><img src={image} alt={name} /></Link>
    </>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Character;