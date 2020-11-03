import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name }) => <div className="test-class">Шапочка приложения, {name}</div>;

Header.propTypes = {
    name: PropTypes.string,
};

export default Header;
