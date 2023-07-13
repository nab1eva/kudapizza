import { useContext } from "react";
import { languageContext } from "../context/LanguageContext";
import { Col, Container, Row } from "react-bootstrap";

import logo from "../../public/logo.svg";
import phone from "../../public/vector.png";
import location from "../../public/loca.png";
import fb from "../../public/fb.png";
import ins from "../../public/ins.png";

const Footer = () => {
  const { lang } = useContext(languageContext);
  return (
    <footer className="pt-4 mb-5">
      <Container>
        <Row>
          <Col>
            <div className="d-flex align-items-center gap-3 logo">
              <img src={logo} alt="" />
              <p className="footer-logo ">{lang.websiteName}</p>
            </div>
            <div>© Copyright 2021 — Куда Пицца</div>
          </Col>
          <Col>
            <p className="list-title">{lang.websiteName}</p>
            <ul>
              <li>{lang.about}</li>
              <li>{lang.sogloweniye}</li>
              <li>{lang.usloviya}</li>
            </ul>
          </Col>
          <Col>
            <p className="list-title">{lang.help}</p>
            <ul>
              <li>{lang.restoran}</li>
              <li>{lang.kontakt}</li>
              <li>{lang.podderjka}</li>
              <li>{lang.zakaz}</li>
            </ul>
          </Col>
          <Col>
            <p className="list-title">{lang.kontakt}</p>
            <ul>
              <li className="d-flex align-items-center gap-2">
                <img src={phone} alt="" />
                <p className="mb-0">+7 (926) 223-10-11</p>
              </li>
              <li className="d-flex align-items-center gap-2">
                <img src={location} alt="" />
                <p className="mb-0">{lang.location}</p>
              </li>
              <li className="d-flex align-items-center gap-4">
                <div className="d-flex align-items-center gap-2">
                  <img src={fb} alt="" />
                  <p className="mb-0">Facebook</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <img src={ins} alt="" />
                  <p className="mb-0">Instagram</p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
