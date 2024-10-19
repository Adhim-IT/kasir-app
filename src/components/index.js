import React from "react";
import NavbarComponent from "./NavbarComponent";
import { Col, Container, Row } from "react-bootstrap";
import {Hasil, ListCategory,NavbarComponent } from "./components";




function App() {
    return (
        <div className="App">
          <NavbarComponent />
          <div className='mt-3'>
            <Container fluid>
            <Row>
            <ListCategory />
            <Col>
              <h4>Hasil</h4>
            </Col>
            <Hasil />
          </Row>
            </Container>
          </div>
        </div>
      );
}