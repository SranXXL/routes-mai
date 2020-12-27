import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
import ToggleButton from 'react-bootstrap/ToggleButton';

import Car from '../assets/car.svg';
import Bus from '../assets/bus.svg';
import Train from '../assets/train.svg';
import Airplane from '../assets/airplane.svg';
import Ruble from '../assets/ruble.svg';
import Clock from '../assets/clock.svg';

import fetchWrapper from '../utils/fetchWrapper';

const mapTransportToIcon = {
    Car,
    Bus,
    Train,
    Airplane,
};
const SORT_TYPES = [
    { name: 'cost', icon: Ruble },
    { name: 'time', icon: Clock },
];
const INITIAL_FORM_VALUES = {
    sort: 'cost',
    alternativeRoutesCount: '3',
};

const initialFetch = async (setCities, setTransports) => {
    try {
        const { data: cities } = await fetchWrapper('http://localhost:3010/cities');
        setCities(cities);

        const { data: transports } = await fetchWrapper('http://localhost:3010/transport');
        setTransports(transports);
    } catch {
        console.error('Unable to get data!');
    }
};
const findRoutes = async (formData) => {
    try {
        const { data } = await fetchWrapper('http://localhost:3010/routes', {
            method: 'POST',
            body: JSON.stringify(formData),
        });
        console.log(data);
    } catch {
        console.error('Unable to find routes!');
    }
};

const RouteForm = () => {
    const [cities, setCities] = useState([]);
    const [transports, setTransports] = useState([]);
    const [formData, setFormData] = useState(INITIAL_FORM_VALUES);

    useEffect(() => {
        initialFetch(setCities, setTransports);
    }, []);

    const changeField = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value === '0' ? null : event.target.value;
        setFormData({ ...formData, [fieldName]: fieldValue });
    };
    const setTransportField = (event) => {
        const fieldName = event.currentTarget.value;
        const fieldValue = event.currentTarget.checked;
        setFormData({
            ...formData,
            transports: {
                ...formData.transports,
                [fieldName]: fieldValue,
            },
        });
    };
    const setSortField = (event) => {
        setFormData({
            ...formData,
            sort: event.currentTarget.value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        findRoutes(formData);
    };

    return (
        <Container className="route-form-container">
            <Form>
                <Row className="route-form-row">
                    <Col>
                        <h1 className="route-form-title">Построение маршрута</h1>
                    </Col>
                </Row>
                <Row className="route-form-row">
                    <Col className="route-form-select">
                        <Form.Group controlId="routeForm.DepatureSelect">
                            <Form.Label>Пункт отправления</Form.Label>
                            <Form.Control as="select" name="depature" onChange={changeField}>
                                <option value="0">---</option>
                                {cities.map(({ id, name }) => (
                                    <option key={id} value={id}>
                                        {name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className="route-form-select">
                        <Form.Group controlId="routeForm.ArrivalSelect">
                            <Form.Label>Пункт назначения</Form.Label>
                            <Form.Control as="select" name="destination" onChange={changeField}>
                                <option value="0">---</option>
                                {cities.map(({ id, name }) => (
                                    <option key={id} value={id}>
                                        {name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col></Col>
                </Row>
                <Row className="route-form-row">
                    <Col className="route-form-btn-group">
                        <Form.Label>Вид транспорта</Form.Label>
                        <ButtonGroup toggle>
                            {transports.map(({ id, name }) => (
                                <ToggleButton
                                    key={id}
                                    type="checkbox"
                                    variant="light"
                                    checked={formData.transports?.[id]}
                                    value={id}
                                    onChange={setTransportField}
                                >
                                    <Image src={mapTransportToIcon[name]} />
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </Col>
                    <Col className="route-form-btn-group">
                        <Form.Label>Сортировка</Form.Label>
                        <ButtonGroup toggle>
                            {SORT_TYPES.map(({ name, icon }) => (
                                <ToggleButton
                                    key={name}
                                    type="radio"
                                    variant="light"
                                    checked={formData.sort === name}
                                    value={name}
                                    onChange={setSortField}
                                >
                                    <Image src={icon} />
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Количество маршрутов</Form.Label>
                            <Form.Control
                                type="number"
                                name="alternativeRoutesCount"
                                value={formData.alternativeRoutesCount}
                                onChange={changeField}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="route-form-row">
                    <Col>
                        <Button className="btn btn-primary route-form-build-route-btn" type="submit" onClick={onSubmit}>
                            Построить маршрут
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

RouteForm.propTypes = {
    name: PropTypes.string,
};

export default RouteForm;
