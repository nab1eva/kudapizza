import { Col, Row } from "react-bootstrap";

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const HomeP = () => {
  return (
    <Row>
      {products.map((pr) => (
        <Col className="mb-3" key={pr.id} lg={3} md={4} sm={6}>
          <ProductCard {...pr} />
        </Col>
      ))}
    </Row>
  );
};

export default HomeP;
