import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { productContext } from "../context/ProductContext";
import { useContext } from "react";
import { languageContext } from "../context/LanguageContext";
import "../index.css";

const ProductCard = ({ id, image, name, description, price }) => {
  const { dispatch } = useContext(productContext);
  const { lang } = useContext(languageContext);
  return (
    <Card className="card">
      <Card.Img height="300px" width="300px" variant="top" src={image} />
      <Card.Body>
        <Card.Title className="card-name">{name}</Card.Title>
        <Card.Text className="card-desc">{description}</Card.Text>
        <div className="d-flex align-items-center justify-content-between">
          <Button
            className="btn"
            onClick={() => dispatch({ type: "add-to-cart", payload: id })}
          >
            {lang.vibor}
          </Button>
          <p className="price">
            {lang.price} 
            {price} ₽
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};

export default ProductCard;
