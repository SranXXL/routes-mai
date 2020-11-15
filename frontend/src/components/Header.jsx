import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Globe from '../assets/globe.svg';

const Header = () => {
    return (
        <header className="header-container">
            <Container>
                <Row className="header-row">
                    <Image className="header-logo" src={Globe} />
                    <h1 className="header-title">MAN MAPS</h1>
                </Row>
            </Container>
        </header>
    );
};

Header.propTypes = {
    name: PropTypes.string,
};

export default Header;
