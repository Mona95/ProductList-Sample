import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import Product from "../Product";

function ProductList(props) {
  let productList =
    props.products &&
    props.products.map((product) => <Product product={product} />);
  return (
    <Container>
      <Row>{productList}</Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductList);
