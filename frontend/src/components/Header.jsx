import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ name }) => {
    const { testField, testThunkField } = useSelector(({ testReducer }) => ({
        testField: testReducer.testField,
        testThunkField: testReducer.testThunkField,
    }));

    return (
        <div className="test-class">
            Шапочка приложения {name}. {testField} {testThunkField}
        </div>
    );
};

Header.propTypes = {
    name: PropTypes.string,
};

export default Header;
