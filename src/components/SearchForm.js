import React, { useRef, useState } from "react"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { CustomCard } from "./CustomCard";
import {Alert} from 'react-bootstrap';
import { fetchMovie } from "../fetchHelper/fetchHelper";






export const SearchForm = () => {

    const strRef = useRef("")

    const [searchMovie, setSearchmovie] = useState({})
    const [error, setError] = useState(false)


    const handleOnSubmit = async (e) => {
        e.preventDefault()

        error && setError(false)

        const str = strRef.current.value
// call api and get movie details
        const data = await fetchMovie(str)
        if (data.Response === "True"){
            setSearchmovie(data)
        } else {
            setError(true)

        }

        
    }


    return(
     <div className="bg-black p-5 rounded shadow-lg">
        <Form onSubmit={handleOnSubmit}>
        <Row className="gap-1">
          <Col md="9">
            <Form.Control  ref= {strRef} placeholder="Search by title" />
          </Col>
          <Col>
          <div className="d-grid">
            <Button variant="info" type="submit"> Search Movie</Button>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center mt-5">
{error ? (
    <Alert variant="danger">Movie not found!</Alert>)
    :(
            <CustomCard searchMovie={searchMovie}/>

            ) }
        </div>

      </Form>
      </div>

    )
}