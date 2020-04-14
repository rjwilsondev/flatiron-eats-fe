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
        let user = JSON.parse(localStorage.user)
        fetch(`http://localhost:3000/users/${user.id}`)
          .then((resp) => resp.json())
          .then((json) => {
            this.setState({ orders: json.orders });
          });
    }


    renderOrderCards() {
      return this.state.orders.map((order) => {
        return <OrderCard order={order} key={order.id} />;
      });
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