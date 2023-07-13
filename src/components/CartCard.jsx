import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

const CartCard = ({ image, name, description, quantity }) => {
  return (
    <Card>
      <Card.Img height="100" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <Button variant="primary">-</Button>
          <Button>{quantity}</Button>
          <Button variant="success">+</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

CartCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
};

export default CartCard;
