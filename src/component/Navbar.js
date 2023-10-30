import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbare from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import ReactStars from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';


function Navbar({getTitle,getrate}) {
  const navigate = useNavigate()
  const ratingChanged = (newRating) => {
    getrate(newRating);
  };
  return (
    <Navbare expand="lg" bg="light">
 <Container fluid>
  
        <button>Movies APP </button>
 
        <Navbare.Toggle aria-controls="navbarScroll" />
        <Navbare.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >  
         
            <button onClick={()=>navigate('/')}>Home</button>
        
          
            <button onClick={()=>navigate('/movies')}>Movies</button>
         
          </Nav>
          <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor='#ffd700'/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e => getTitle(e.target.value)}
            />
            <Button variant="outline-success">search</Button>
          </Form>
        </Navbare.Collapse>
      </Container>
    </Navbare>

  );
}

export default Navbar