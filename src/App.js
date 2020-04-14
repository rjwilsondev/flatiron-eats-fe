import React from 'react';
import {Route, Switch} from 'react-router-dom' // switch
import RestaurantContainer from './containers/RestaurantContainer';
import FoodContainer from './containers/FoodContainer';
import Navbar from './components/Navbar'
import Login from './components/Login'
import ProfileContainer from './containers/ProfileContainer' 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      currentUser: null,
      cart: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/restaurants")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ restaurants: json });
      });
  }

  addItemToCart = (event,food) => {
    event.preventDefault();
    this.setState({cart: [...this.state.cart, food]})
    console.log(`The cart now has ${this.state.cart.length} items.`)
  };

  checkoutCart = (event) => {
    event.preventDefault();
    console.log("Checking out cart")
    debugger
    let cart = this.state.cart;
    let user = localStorage.getItem("user");
    fetch("http://localhost:3000/orders",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({"cart": cart,"user": user})
    })
      .then(resp => resp.json())
      .then(json => console.log(json))
  }

  updateCurrentUser = (user) => {
    console.log(user)
    this.setState({
      currentUser: user
    })
    localStorage.setItem("user",JSON.stringify(user))
    console.log(localStorage.getItem("user"))
  }

  render() {
    return (
      <div className="App">
        <Navbar cart="I am a prop for navbar" />

        <Route exact path="/restaurant/:id" render={(props) =>{

            let restaurantId = props.match.params.id
            if (this.state.restaurants.length > 0) {
              let foundrestaurant = this.state.restaurants.find(r => r.id == restaurantId)
            return <FoodContainer restaurant={foundrestaurant} addItem={this.addItemToCart} checkout={this.checkoutCart} />
            }else {
              return null
            }
        }}/>

        <Route exact path="/profile" render={()  => <ProfileContainer />}  />

        <Route exact path="/login" render={() => <Login addUser={this.updateCurrentUser}/>} />

        <Route exact path="/" render={() => <RestaurantContainer restaurants={this.state.restaurants} />}/>
      </div>
    );
  }
}

export default App;
