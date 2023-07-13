import { useContext } from "react";
import { productContext } from "../context/ProductContext";
import { Col, Row } from "react-bootstrap";
import CartCard from "../components/CartCard";

const CartP = () => {
  const { cartProducts } = useContext(productContext);
  return (
    <Row>
      {cartProducts.map((pr) => (
        <Col className="mb-3" key={pr.id} lg={3} md={4} sm={6}>
          <CartCard {...pr} />
        </Col>
      ))}
    </Row>
  );
};

export default CartP;
