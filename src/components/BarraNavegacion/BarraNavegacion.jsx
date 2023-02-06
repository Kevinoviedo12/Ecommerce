import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from './cartWidget/cartWidget';
import {  Link, NavLink } from "react-router-dom";



function barraNavegacion(){
    return(
    
       <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to ='/'> Ecommerce </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink  to="/categoria/futbol" className={({isActive}) =>isActive ? 'btn btn-primary': 'btn btn-outline-primary ' }>Futbol</NavLink>
            <NavLink to="/categoria/natacion" className={({isActive}) =>isActive ? 'btn btn-primary': 'btn btn-outline-primary '}>Natacion</NavLink>
            <NavLink to="/categoria/tenis" className={({isActive}) =>isActive ? 'btn btn-primary': 'btn btn-outline-primary '}>Tenis</NavLink>
            <NavLink to="/categoria/hockey" className={({isActive}) =>isActive ? 'btn btn-primary': 'btn btn-outline-primary '}>Hockey</NavLink>
            <NavLink to="/categoria/boxeo" className={({isActive}) =>isActive ? 'btn btn-primary': 'btn btn-outline-primary '}>Boxeo</NavLink>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets"><CartWidget cartCounter={0}/></Nav.Link> */}
            <Link to='/cart'>
            <CartWidget cartCounter={0}/>
            </Link>
            <button className="btn btn-light" style={{marginLeft: "15px"}}>Sign Up</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
}

export default barraNavegacion;