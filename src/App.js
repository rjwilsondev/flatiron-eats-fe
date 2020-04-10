import React from 'react';
import {Route, Switch} from 'react-router-dom' // switch
import RestaurantContainer from './containers/RestaurantContainer';
import FoodContainer from './containers/FoodContainer';
import Navbar from './components/Navbar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      restaurants: []
    }
  }

  componentDidMount(){
    console.log("Mounting...")
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
            debugger
            let foundrestaurant = this.state.restaurants.find(r => r.id === restaurantId)
          return <FoodContainer restaurant={foundrestaurant} />
        }}/>

        <Route path="/home" render={() => <RestaurantContainer restaurants={this.state.restaurants} />}/>

      </Switch>

      
    </div>
  )
  }
}

export default App;
