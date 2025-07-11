import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-light min-vh-100">
          <Navbar expand="md" className="flex-column align-items-start">
            <Navbar.Brand as={Link} to="/">Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/dust-chart">미세먼지 차트</Nav.Link>
                <Nav.Link as={Link} to="/temperature-chart">온도 차트 (예정)</Nav.Link>
                <Nav.Link as={Link} to="/humidity-chart">습도 차트 (예정)</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col md={10}>
          <main className="p-4">
            {children}
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardLayout;
