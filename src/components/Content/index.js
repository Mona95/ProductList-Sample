import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "../../components/Content/ProductList";
import ProductDetail from "../../components/Content/ProductDetail";
import "./content.scss";

export default function Content() {
  return (
    <div className="content-wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}
