import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CustomCard } from "./CustomCard";

export const Display = ({ movieList, handleOnDelete }) => {
  const [displayList, setDisplayList] = useState([]);

  // runs only on initial time
  // runs every time at the end of the component render
  // runs selectively by passing some dependency vairable

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const handleOnFilter = (str) => {
    let tempArg =
      str === "all" ? movieList : movieList.filter((item) => item.mode === str);

    setDisplayList(tempArg);
  };

  return (
    <div className="bg-black p-5 rounded shadow-lg mt-5">
      <div className="">
        <ButtonGroup aria-label="Basic example">
          <Button onClick={() => handleOnFilter("all")} variant="primary">
            All
          </Button>
          <Button onClick={() => handleOnFilter("happy")} variant="warning">
            Happy
          </Button>
          <Button onClick={() => handleOnFilter("lazy")} variant="info">
            Lazy
          </Button>
        </ButtonGroup>
      </div>
      <div className="py-3">{displayList.length} Movies found!</div>
      <hr />

      <Row>
        <Col className="d-flex gap-2 flex-wrap justify-content-around">
          {displayList.map((item) => (
            <CustomCard searchedMovie={item} func={handleOnDelete} />
          ))}
        </Col>
      </Row>
    </div>
  );
};