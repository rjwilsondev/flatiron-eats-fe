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
      searchTerm: ''
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
    setTimeout( () =>
      console.log(`The cart now has ${this.state.cart.length} items.`)
    ,50)
  };

  checkoutCart = (event) => {
    event.preventDefault();
    console.log("Checking out cart")
    let cart = this.state.cart;
    let user = localStorage.getItem("user_id");
    fetch("http://localhost:3000/orders",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({"cart": cart,"user_id": user})
    })
  }

  updateCurrentUser = (user) => {
    console.log(user)
    this.setState({
      currentUser: user,
      searchTerm: ''
    })
    localStorage.setItem("user_id",user.id)
    console.log(localStorage.getItem("user_id"))
  }

  updateSearchTerm  = (event) =>{
    console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar cart="I am a prop for navbar" updateSearchTerm={this.updateSearchTerm} searchTerm={this.state.searchTerm}/>

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

        <Route exact path="/" render={() => <RestaurantContainer restaurants={this.state.restaurants} searchTerm={this.state.searchTerm} />}/>
      </div>
    );
  }
}

export default App;
