import { Container } from "react-bootstrap";

import Image from "../../images/index-hero.webp";

import "./hero.styles.css";
import { Link } from "react-router-dom";

const HeroIndex = () => {
  return (
    <>
      <Container fluid={true} className="bg-light py-5">
        <Container>
          <div className="hero-container">
            <div className="text-capitalize text-black">
              <h1 className="display-3 fw-bold">
                unlock the door to your{" "}
                <span className="nasblue-text">dream home</span> today
              </h1>
              <p>let's get you there</p>
              <Link
                className="btn btn-lg px-4 rounded-pill nasblue-bg cta-btn"
                to={"/properties"}
              >
                properties
              </Link>
            </div>
            <div className="h-100">
              <img
                className="image-cont rounded"
                src={Image}
                alt="London Bridge View"
              />
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default HeroIndex;
