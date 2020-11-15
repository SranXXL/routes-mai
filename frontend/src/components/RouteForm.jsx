import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';

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

const RouteForm = () => {
    const [cities, setCities] = useState([]);
    const [transports, setTransports] = useState([]);

    useEffect(() => {
        initialFetch(setCities, setTransports);
    }, []);

    return (
        <Container className="route-form-container">
            <Row className="route-form-row">
                <Col>
                    <h1 className="route-form-title">Построение маршрута</h1>
                </Col>
            </Row>
            <Row className="route-form-row">
                <Col className="route-form-select">
                    <Form.Group controlId="routeForm.DepatureSelect">
                        <Form.Label>Пункт отправления</Form.Label>
                        <Form.Control as="select">
                            {cities.map((city) => (
                                <option key={city}>{city}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col className="route-form-select">
                    <Form.Group controlId="routeForm.ArrivalSelect">
                        <Form.Label>Пункт назначения</Form.Label>
                        <Form.Control as="select">
                            {cities.map((city) => (
                                <option key={city}>{city}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col></Col>
            </Row>
            <Row className="route-form-row">
                <Col className="route-form-btn-group">
                    <Form.Label>Вид транспорта</Form.Label>
                    <ButtonGroup aria-label="Basic example">
                        {transports.map((transport) => (
                            <Button variant="light" key={transport}>
                                <Image src={mapTransportToIcon[transport]} />
                            </Button>
                        ))}
                    </ButtonGroup>
                </Col>
                <Col className="route-form-btn-group">
                    <Form.Label>Сортировка</Form.Label>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="light">
                            <Image src={Ruble} />
                        </Button>
                        <Button variant="light">
                            <Image src={Clock} />
                        </Button>
                    </ButtonGroup>
                </Col>
                <Col>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Количество маршрутов</Form.Label>
                        <Form.Control type="number" placeholder="3" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="route-form-row">
                <Col>
                    <Button className="btn btn-primary route-form-build-route-btn">Построить маршрут</Button>
                </Col>
            </Row>
        </Container>
    );
};

RouteForm.propTypes = {
    name: PropTypes.string,
};

export default RouteForm;
