import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Sell from "./components/pages/Sell";
import Contact from "./components/pages/Contact";
import About from "./components/pages/AboutUs";
import Terms from "./components/pages/Terms";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sell" component={Sell} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/terms" component={Terms} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
