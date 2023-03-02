import './App.css';
import { SearchForm } from './components/SearchForm';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Display } from './components/Display';

function App() {
  return (
    <div className='wrapper ' >
      <Container>

        {/* title */}
        <Row>
          <Col>
          <h1 className='mt-5 text-center wraning'>
            My Movie Collection
          </h1>
          </Col>
        </Row>
        <hr className='hr' />

        <SearchForm />
        <Display/>

       
      </Container>
      
    </div>
  );
}

export default App;
