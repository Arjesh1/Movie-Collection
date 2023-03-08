import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm";
import { Display } from "./components/Display";
import { useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addMoveToList = (movie) => {
    const tempArg = movieList.filter((itme) => itme.imdbID !== movie.imdbID);
    setMovieList([...tempArg, movie]);
  };

  const handleOnDelete = (imdbID) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setMovieList(movieList.filter((item) => item.imdbID !== imdbID));
    }
  };

  return (
    <div className="wrapper bg-dark ">
      <Container>
        <Row>
          <Col>
            <h1 className="mt-5 text-center"> My Movie Collection</h1>
          </Col>
        </Row>
        <hr />

        <SearchForm addMoveToList={addMoveToList} />

        <Display movieList={movieList} handleOnDelete={handleOnDelete} />
      </Container>
    </div>
  );
}

export default App;