import { Container, Nav, Navbar } from "react-bootstrap";

import Image from "../../images/nasuk.webp";

import "./navbar.styles.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar className="shadow" bg="white" expand="md">
        <Container>
          <Link to={"/"}>
            <img className="brand-imagery" src={Image} alt="Naskaxe London" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Link to={"/about"} className="nav-link text-black">
                About
              </Link>
              <Link to={"/properties"} className="nav-link px-lg-5 text-black">
                Properties
              </Link>
              <Link to={"/contact"} className="nav-link text-black">
                Contact
              </Link>
            </Nav>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={"/properties"}
                  className="btn btn-lg px-4 rounded-pill nasblue-bg cta-btn"
                >
                  Properties
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
