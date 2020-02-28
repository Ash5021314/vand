import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Advantage from "./Pages/Advantage";
import Catalog from "./Pages/Catalog";
import Contact from "./Pages/Contact";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import Catalogs from "./Pages/Catalogs";
import Administrator from "./Components/Administrator";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/Administrator" component={Administrator} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/advantage" component={Advantage} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/catalogs" component={Catalogs} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
