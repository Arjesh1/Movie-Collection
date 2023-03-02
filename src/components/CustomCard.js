import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CustomCard = ({searchMovie}) =>{
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={searchMovie?.Poster} />
      <Card.Body>
        <Card.Title>{searchMovie?.Title}</Card.Title>
        <Card.Text>
          {searchMovie?.Plot?.slice(0, 100)}
        </Card.Text>
        <Card.Text>
          Year: {searchMovie?.Year}
        </Card.Text>
        <Card.Text>
          Rating: {searchMovie?.imdbRating}
        </Card.Text>
        <Card.Text>
          Language: {searchMovie?.Language}
        </Card.Text>
        <div className="d-flex justify-content-between"> 
            <Button variant="warning">Happy</Button>
            <Button variant="info">Lazy</Button>
        
            </div>

            <div className="d-grid mt-2">
            <Button variant="danger">Delete</Button>
        
            </div>
        
      </Card.Body>
    </Card>
    )
}