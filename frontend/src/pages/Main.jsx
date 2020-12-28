import React from 'react';

import Container from 'react-bootstrap/Container';

import Header from '../components/Header.jsx';
import RouteForm from '../components/RouteForm.jsx';
import RoutesTable from '../components/RoutesTable.jsx';

const Main = () => (
    <>
        <Header />
        <Container>
            <div className="route-form-container">
                <RouteForm />
            </div>
            <div className="route-table-wrapper">
                <RoutesTable />
            </div>
        </Container>
    </>
);

export default Main;
