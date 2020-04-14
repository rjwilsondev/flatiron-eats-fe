import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const header = (props) => {

    let cartCount = props.cart.count

    return(
        <div>        
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="http://localhost:3001/">FlatironEats</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="http://localhost:3001/">Restaurants</Nav.Link>
            <Nav.Link href="http://localhost:3001/restaurant/10">Features</Nav.Link>
            <Nav.Link href="http://localhost:3001/login">Login</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.updateSearchTerm} value={props.searchTerm}/>
                {(props.cart.count > 0)  ?  <Button variant="outline-info">Cart: {cartCount}</Button> : <Button variant="outline-info">Cart: {cartCount}</Button>}
            {/* <Button variant="outline-info">Cart: </Button> */}
            </Form>
            </Navbar> 
        </div>

    )
}

export default header