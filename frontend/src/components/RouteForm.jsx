import React from 'react';
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

const RouteForm = () => {
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
                            <option>Москва</option>
                            <option>Санкт-Петербург</option>
                            <option>Орёл</option>
                            <option>Чита</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col className="route-form-select">
                    <Form.Group controlId="routeForm.ArrivalSelect">
                        <Form.Label>Пункт назначения</Form.Label>
                        <Form.Control as="select">
                            <option>Москва</option>
                            <option>Санкт-Петербург</option>
                            <option>Орёл</option>
                            <option>Чита</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col></Col>
            </Row>
            <Row className="route-form-row">
                <Col className="route-form-btn-group">
                    <Form.Label>Вид транспорта</Form.Label>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="light">
                            <Image src={Car} />
                        </Button>
                        <Button variant="light">
                            <Image src={Bus} />
                        </Button>
                        <Button variant="light">
                            <Image src={Train} />
                        </Button>
                        <Button variant="light">
                            <Image src={Airplane} />
                        </Button>
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
