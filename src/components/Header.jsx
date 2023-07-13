import { useContext } from "react";
import { Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { languageContext } from "../context/LanguageContext";
import { productContext } from "../context/ProductContext";
import "../index.css";

import logo from "../../public/logo.svg";

const Header = () => {
  const { lang, setLang, type } = useContext(languageContext);
  const { cartProducts, favoriteProducts } = useContext(productContext);

  return (
    <Navbar expand="md" className="bg-body-tertiary mb-3 fixed-top top">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img className="pe-3" src={logo} alt="" />
          {lang.websiteName}
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{lang.websiteName}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
              <NavLink to="/cart" className="nav-link">
                <div className="button">
                  {lang.cart} ({cartProducts.length})
                </div>
              </NavLink>
              <NavLink to="/favorite" className="nav-link">
                <div className="button">
                  {lang.favorite} ({favoriteProducts.length})
                </div>
              </NavLink>
              <Form.Select
                value={type}
                style={{ width: "70px", height:"40px"}}
                onChange={(e) => setLang(e.target.value)}
              >
                <option value="en">En</option>
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
              </Form.Select>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
