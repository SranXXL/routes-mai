import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';

import Header from '../components/Header.jsx';
import { setTestField } from '../reducers/testReducer.js';
import testFunc from '../reducers/testFunc.js';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {}, []);

    return (
        <>
            <Header />
            <div className="container">
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
            </div>
        </>
    );
};

export default Main;
