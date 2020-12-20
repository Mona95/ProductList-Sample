import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import Product from "../Product";

function ProductList(props) {
  let productList =
    props.products &&
    props.products.map((product) => (
      <Product key={product.productId} product={product} />
    ));
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: 70 }}>
        {productList}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductList);
