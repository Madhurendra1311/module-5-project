import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Pad from "./Components/Pad";
import Phone from "./Components/Phone";
import Faq from "./Components/Faq";
import { Login } from "./Components/Login";
import PrivateRoutes from './PrivateRoute'

class App extends Component {
    
    render() {
        return (
            <>
                <Route path="/" render={() => <Navbar />} />
                <Switch> 
                    <Route path="/" exact render={() => <Home />} />
                    <Route path="/products" render={() => <PrivateRoutes />} />
                    <Route path="/products" render={() => <Products />} />
                    <Route path="/about" render={() => <About />} />
                    <Route path="/contact" render={() => <Contact />} />
                    <Route path="/iPad" render={(props) => <Pad  {...props} />} />
                    <Route path="/iPhone" render={(props) => <Phone  {...props}/>} />
                    <Route path="/products/faq" render={() => <Faq />} />
                    <Route path="/login" render={() => <Login />} />
                </Switch>
                <Footer />
                
            </>
        );
    }
}

export default App;