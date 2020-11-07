import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';

import Header from '../components/Header.jsx';
import { setTestField } from '../reducers/testReducer.js';
import testFunc from '../reducers/testFunc.js';

const Main = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Header name="MAN MAPS" />
            <Button
                variant="primary"
                onClick={() => {
                    dispatch(setTestField('Redux'));
                }}
            >
                УстановитьtestField
            </Button>
            <Button
                variant="primary"
                onClick={() => {
                    dispatch(testFunc('подключен'));
                }}
            >
                Установить testThunkField
            </Button>
        </>
    );
};

export default Main;
