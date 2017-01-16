import React from "react";
import Toolbar from "./Toolbar";
import Product from "./Product";
import AboutUs from "./AboutUs";
import { connect } from "react-redux";

@connect((store) => {
  return {
    selectedProduct: store.selectedProduct
  }
})
export default class App extends React.Component {
  render() {
    let prod = this.props.selectedProduct;
    return (
      <div className="App">
        <Toolbar />
        <div className="App__content">
          { prod ? <Product product={prod} /> : <AboutUs /> }
        </div>
      </div>
    );
  }
}
