import { Link } from "react-router-dom";
import "./about-gallery.styles.css";
import { Container } from "react-bootstrap";

const AboutGallery = () => {
  return (
    <>
      <Container fluid={true} className="py-3 bg-black">
        <Container>
          <div className="gallery-container">
            <h3 className="text-center text-white text-capitalize mb-2">
              keep exploring
            </h3>
            <div className="gallery-items mb-3">
              <Link
                to={"/properties"}
                className="gallery-item gallery-item-color"
              >
                Properties
              </Link>
              <Link to={"/contact"} className="gallery-item gallery-item-color">
                contact us
              </Link>
            </div>
            <hr className="mx-auto text-white form-container" />
          </div>
        </Container>
      </Container>
    </>
  );
};

export default AboutGallery;
