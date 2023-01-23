import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from './cartWidget/cartWidget';




function barraNavegacion(){
    return(
    <>
       <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='' href="#futbol">Futbol</Nav.Link>
            <Nav.Link href="#natacion">Natacion</Nav.Link>
            <Nav.Link href="#tenis">Tenis</Nav.Link>
            <Nav.Link href="#hockey">Hockey</Nav.Link>
            <Nav.Link href="#boxeo">Boxeo</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><CartWidget cartCounter={0}/></Nav.Link>
            <button className="btn btn-light" style={{marginLeft: "15px"}}>Sign Up</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}

export default barraNavegacion;