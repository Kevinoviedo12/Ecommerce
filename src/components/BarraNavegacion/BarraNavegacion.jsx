import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from './cartWidget/cartWidget';




function barraNavegacion(){
    return(
    <>
      <Navbar className='fondo' expand="lg">
        <Container>
            <Navbar.Brand href="#home">Tienda De deportes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className='centrado'>
                    <Nav>
                        <Nav.Link href="#natacion">Natacion</Nav.Link>
                        <Nav.Link href="#futbol">Futbol</Nav.Link>
                        <Nav.Link href="#hockey">Hockey</Nav.Link>
                        <Nav.Link href="#tenis">Tenis</Nav.Link>
                        <Nav.Link href="#boxeo">Boxeo</Nav.Link>
                        <Nav.Link href="#carrito"> 
                            <CartWidget /> 
                        </Nav.Link>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}

export default barraNavegacion;