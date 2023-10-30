import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
   
function MovieCard ({film}) {
  return (
    
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={film.posterURL}alt='moviecard' 
      witdh='100%'
      height='300px'/> 
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        <Card.Text> { film.description } </Card.Text>
        <Card.Text> {"⭐".repeat(film.rate)} </Card.Text>
        <Button variant="primary">watch</Button>
      </Card.Body>
    </Card>
    
  )
}


export default MovieCard