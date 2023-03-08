import React, { useRef, useState } from "react";
import { Alert, Button } from "react-bootstrap";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { fetchMovies } from "../helper/fetchHelper";
import { CustomCard } from "./CustomCard";

export const SearchForm = ({ addMoveToList }) => {
  const strRef = useRef("");
  const [searchedMovie, setSearchedMovie] = useState({});
  const [error, setError] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    error && setError(false);
    const str = strRef.current.value;

    //call api and get the movie details;
    const data = await fetchMovies(str);

    if (data.Response === "True") {
      setSearchedMovie(data);
    } else {
      setError(true);
    }
  };

  const func = (mode) => {
    addMoveToList({ ...searchedMovie, mode });
    setSearchedMovie({});
    strRef.current.value = "";
  };
  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <Form onSubmit={handleOnSubmit}>
        <Row className="gap-1">
          <Col md="9">
            <Form.Control ref={strRef} placeholder="Search by title" />
          </Col>
          <Col>
            <div className="d-grid">
              <Button variant="info" type="submit">
                Search Movie
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      <div className="d-flex justify-content-center mt-5">
        {error && <Alert variant="danger">Movie not found!</Alert>}
        {searchedMovie.imdbID && (
          <CustomCard searchedMovie={searchedMovie} func={func} />
        )}
      </div>
    </div>
  );
};