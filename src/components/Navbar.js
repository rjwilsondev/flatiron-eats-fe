import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';


const header = (props) => {


    return(
        <div>        
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="http://localhost:3001/">FlatironEats</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="http://localhost:3001/">Restaurants</Nav.Link>
            <Nav.Link href="http://localhost:3001/profile">Past Orders</Nav.Link>
            <Nav.Link href="http://localhost:3001/login">Login</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.updateSearchTerm} value={props.searchTerm}/>
            
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Checkout (items: {props.cart.length})
                </Dropdown.Toggle>

                <Dropdown.Menu alignRight>
                    {props.cart.map(item => 
                        <Dropdown.Header>{item.name}: ${item.price}</Dropdown.Header>
                        )}
                    <Dropdown.Item onClick={(e) => props.checkout(e)}>Checkout</Dropdown.Item>
                </Dropdown.Menu>
                
                </Dropdown>
            </Form>
            </Navbar> 
        </div>

    )
}

export default header