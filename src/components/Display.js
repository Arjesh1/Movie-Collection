import React from "react"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { CustomCard } from "./CustomCard";

export const Display = () => {

    return(

        <div className="bg-black p-5 rounded shadow-lg mt-5" >

            <div className="">
            <ButtonGroup aria-label="Basic Example">
          <Button variant="danger">All </Button>
          <Button variant="warning">Happy</Button>
          <Button variant="info">Lazy</Button>
          
        </ButtonGroup>
            </div>
            <div className="py-3">0 Movies found</div>

            <hr/>

            <Row>
                <Col>

                <CustomCard/>


                 </Col>

            </Row>


        </div>
    )
}