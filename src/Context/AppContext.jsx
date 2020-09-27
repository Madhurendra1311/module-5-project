import React from "react";
import axios from 'axios'

const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: [],
      isAuth: false
    };
  }
  addToCart = (product) => {
    this.setState({
        cartProducts: [...this.state.cartProducts, product]
    });
  };

  checkUserAuthentication = ({ email, password }) => {
    axios
      .post("https://reqres.in/api/login", {
        email,
        password
      })
      .then((res) => {
        console.log(res);
        this.setState({
          isAuth: true
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };

  render() {
    const { cartProducts, isAuth } = this.state;
    const { addToCart, checkUserAuthentication } = this;
    return (
      <AppContext.Provider value={{ cartProducts, addToCart, isAuth, checkUserAuthentication }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppContextProvider };