import React from 'react';
import RestaurantContainer from './containers/RestaurantContainer';
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
      <Navbar cart="I am a prop for navbar" />
      <RestaurantContainer restaurants={[0,1,2]} />
    </>
  )
}

export default App;
