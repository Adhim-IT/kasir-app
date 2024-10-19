import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ListCategory from './components/ListCategory';
import Hasil from './components/Hasil';

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

export default App;
