import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';

import Header from '../components/Header.jsx';
import { setTestField } from '../reducers/testReducer.js';
import testFunc from '../reducers/testFunc.js';
import fetchWrapper from '../utils/fetchWrapper';

const initialFetch = async () => {
    try {
        const { data: cities } = await fetchWrapper('http://localhost:3010/cities');
        console.log(cities);

        const { data: transport } = await fetchWrapper('http://localhost:3010/transport');
        console.log(transport);
    } catch {
        //
    }
};

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        initialFetch();
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
