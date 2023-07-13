import { useContext } from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import { languageContext } from "../context/LanguageContext";

import location from "../../public/location.svg";
import account from "../../public/account.svg";

const TopHeader = () => {
  const { lang } = useContext(languageContext);

  return (
    <Navbar expand="md" className="bg-body-tertiary mb-3 fixed-top">
      <Container>
        <div className="d-grid align-items-center grid2">
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center ">
              {" "}
              <img src={location} alt="" />
              <Form.Select
                className="form small-text"
                aria-label="Default select example"
              >
                <option>{lang.moskva}</option>
                <option className="small-text" value="1">
                  {lang.moskva}
                </option>
                <option className="small-text" value="1">
                  {lang.tashkent}
                </option>
                <option className="small-text" value="2">
                  {lang.london}
                </option>
                <option className="small-text" value="3">
                  {lang.dubai}
                </option>
              </Form.Select>
            </div>
            <button className="small-text">{lang.address}</button>
            <div className="small-text">
              {lang.dostavka} <b>00:24:19</b>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 small-text">
            {lang.vaqti}
            <button className="small-text d-flex align-items-center gap-1">
              <img src={account} alt="" />
              {lang.login}
            </button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopHeader;
