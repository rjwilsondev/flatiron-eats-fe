import React, { Fragment } from "react";
import OrderCard from "../components/OrderCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import { render } from "@testing-library/react";

class Profile extends React.Component {
    
    state =  {
        orders: [],
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.user_id)
        fetch(`https://flatiron-eats-backend.herokuapp.com/users/${user}`)
          .then((resp) => resp.json())
          .then((json) => {
            this.setState({ orders: json.orders });
          });
    }


    renderOrderCards() {
      console.log(this.state.orders)
      if (this.state.orders){
         return this.state.orders.map((order) => {
          return <OrderCard order={order} key={order.id} />;
        });
      } else {
        return "Sorry You have no past orders."
      }
    };

  render() {
  return (
    <Fragment>
      <Container>
        <Row>{this.renderOrderCards()}</Row>
      </Container>
    </Fragment>
  );
};


}

export default Profile;