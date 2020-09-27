import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AppContext } from "../src/Context/AppContext";
import Pad from "../src/Components/Pad";
import Phone from "../src/Components/Phone";

export default function PrivateRoute() {
    return (
        <AppContext.Consumer>
        {({ isAuth }) => {
          if (!isAuth) {
            return <Redirect to="/login" />;
          }
          console.log(isAuth)
  
          return (
            <Switch>
            <Route
              path="/products"
              exact
              render={() => <div>Welcome to Product Page</div>}
            />
            
              <Route
                path="/products/iPad"
                render={(props) => <Pad {...props} />}
              />
              <Route
                path="/products/iPhone"
                render={(props) => <Phone {...props} />}
              />
            </Switch>
          );
        }}
      </AppContext.Consumer>
    )
}
