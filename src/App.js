import React from 'react';
import RestaurantContainer from './containers/RestaurantContainer';
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
    <div>
      <Navbar cart="I am a prop for navbar" />
      <RestaurantContainer restaurants={this.state.restaurants} />
    </div>
  )
  }
}

export default App;
