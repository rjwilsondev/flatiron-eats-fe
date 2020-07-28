import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault()
        fetch("https://flatiron-eats-backend.herokuapp.com/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              name: this.state.username,
              password: this.state.password
            })
        }).then(res => res.json())
            .then(json => {
                if(json.error){
                  alert(json.message)
                }else{
                  this.props.addUser(json)
                }
              })
    }

    

    render() {
    return(
        <div>        
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" name="username" onChange={this.handleChange} value={this.state.username}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                Submit
            </Button>
            </Form>
        </div>
    )}
}

export default Login