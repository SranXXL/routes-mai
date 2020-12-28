/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';

import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

import { mapTransportToIcon } from '../constants';
import formattedTime from '../utils/formattedTime';

const RoutesTable = () => {
    const { error, intial, path, totalCost, totalTime } = useSelector(({ routeReducer }) => routeReducer);
    const { cities, transports } = useSelector(({ cityReducer, transportReducer }) => ({
        cities: cityReducer.cities,
        transports: transportReducer.transports,
    }));

    if (intial) {
        return <></>;
    }

    if (error) {
        return <p className="route-table-error">{error}</p>;
    }

    if (path.length === 0) {
        return <p>По вашему запросу ничего не найдено...</p>;
    }

    return (
        <>
            <h3 className="gap-bottom">Найденный маршрут</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Вид транспорта</th>
                        <th>Пункт отправления</th>
                        <th>Пункт назначения</th>
                        <th>Время в пути</th>
                        <th>Стоимость</th>
                    </tr>
                </thead>
                <tbody>
                    {path.map(({ id_city1, id_city2, id_transport, cost, time }, index) => {
                        const transportName = transports.find(({ id }) => id === id_transport).name;
                        const imgSrc = mapTransportToIcon[transportName];
                        const departure = cities.find(({ id }) => id === id_city1).name;
                        const destination = cities.find(({ id }) => id === id_city2).name;

                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <Image src={imgSrc} />
                                </td>
                                <td>{departure}</td>
                                <td>{destination}</td>
                                <td>{formattedTime(time)}</td>
                                <td>{cost} руб.</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <p>Общая стоимость поездки: {totalCost} руб.</p>
            <p>Общее время в пути: {formattedTime(totalTime)}</p>
        </>
    );
};

export default RoutesTable;
