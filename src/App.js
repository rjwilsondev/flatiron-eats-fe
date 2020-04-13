import React from 'react';
import {Route, Switch} from 'react-router-dom' // switch
import RestaurantContainer from './containers/RestaurantContainer';
import FoodContainer from './containers/FoodContainer';
import Navbar from './components/Navbar'
import Login from './components/Login'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      restaurants: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/restaurants")
    .then(resp => resp.json())
    .then(json => {this.setState({restaurants: json})})
  }

  render(){
    return (
    <div className="App">
      <Navbar cart="I am a prop for navbar" />

      <Switch>

        <Route exact path="/restaurant/:id" render={(props) =>{
            console.log(props)
            let restaurantId = props.match.params.id
            if (this.state.restaurants.length > 0) {
              let foundrestaurant = this.state.restaurants.find(r => r.id == restaurantId)
              console.log(foundrestaurant)
            return <FoodContainer restaurant={foundrestaurant} />
            }else {
              return null
            }
        }}/>

        <Route exact path="/login" render={() => <Login/>} />

        <Route exact path="/" render={() => <RestaurantContainer restaurants={this.state.restaurants} />}/>

      </Switch>

      
    </div>
  )
  }
}

export default App;
