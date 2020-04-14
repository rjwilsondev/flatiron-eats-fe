import React, { Fragment } from "react";
// import OrderCard from "../components/OrderCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { render } from "@testing-library/react";

class Profile extends React.Component {

    state =  {
        orders: []
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.user)
        fetch(`http://localhost:3000/user/${user.id}`)
          .then((resp) => resp.json())
          .then((json) => {
            this.setState({ orders: json.orders });
          });
    }

  render() {
  return (
    <Fragment>
      <Container>
        {/* <Row>{props.restaurant ? renderFoodCards(props) : null}</Row> */}
      </Container>
    </Fragment>
  );
};


// const renderFoodCards = (props) => {
//   return props.restaurant.items.map((item) => {
//     return <FoodCard food={item} addItem={props.addItem} key={item.id} />;
//   });
// };

}

export default Profile;