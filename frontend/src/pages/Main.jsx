import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';

import Header from '../components/Header.jsx';
import { setTestField } from '../reducers/testReducer.js';
import testFunc from '../reducers/testFunc.js';

const getData = async (path) => {
    const response = await fetch(path);

    if (response.ok) {
        const data = await response.json();
        // eslint-disable-next-line no-console
        console.log(data);
        return data;
    }
    throw Error;
};

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            getData('http://localhost:3010/cities');
            getData('http://localhost:3010/transport');
        } catch {
            //
        }
    }, []);

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
