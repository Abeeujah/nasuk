import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "./gallery.styles.css";

const Gallery = () => {
  return (
    <>
      <Container fluid={true} className="py-3 bg-black">
        <Container>
          <div className="gallery-container">
            <h3 className="text-center text-white text-capitalize mb-2">
              need a direct line?
            </h3>
            <div className="gallery-items mb-3">
              <a
                href="tel:+2349039301500"
                className="gallery-item gallery-item-color"
              >
                <FontAwesomeIcon icon={faPhone} size="2xl" />
                <p>+2349039301500</p>
              </a>
              <a
                href="mailto:info@naskaxeproperty.com"
                className="gallery-item gallery-item-color"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                <p>info@naskaxeproperty.com</p>
              </a>
            </div>
            <hr className="mx-auto text-white form-container" />
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Gallery;
