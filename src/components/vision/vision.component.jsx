import { Container } from "react-bootstrap";

import Image from "../../images/vision-image.webp";

import "./vision.styles.css";

const visionData = {
  header: "our vision",
  text: `Our vision is to empower people by providing them with access
  to high-quality, sustainable, and affordable properties that
  enrich their lives and foster thriving communities. We are
  dedicated to meticulously selecting and acquiring the best
  properties, conducting comprehensive assessments to ensure they
  meet our stringent standards for quality and sustainability. By
  delivering exceptional properties and services, we aim to create
  neighborhoods that inspire a sense of pride and belonging among
  residents. Our ultimate vision is to build a world where
  everyone has access to safe, comfortable, and welcoming homes.`,
};

const Vision = () => {
  const { header, text } = visionData;
  return (
    <>
      <Container fluid={true} className="pt-1 pb-3">
        <Container>
          <div className="mission-mobile-container mb-3">
            <div className="mission-mobile-img mb-3">
              <div className="hide-overflow rounded-2">
                <img
                  className="mission-image hover-scale rounded-2"
                  src={Image}
                  alt="Naskaxe Mission"
                />
              </div>
              <h4 className="text-black text-capitalize fw-bold">{header}</h4>
            </div>
            <div className="mission-mobile-text">
              <p className="text-capitalize text-dark">{text}</p>
            </div>
          </div>
          <div className="mission-container">
            <div className="mission-text">
              <h4 className="text-black text-capitalize fw-bold">{header}</h4>
              <p className="text-capitalize text-dark">{text}</p>
            </div>
            <div className="mission-img rounded-2 hide-overflow">
              <img
                className="rounded-2 hover-scale"
                src={Image}
                alt="Naskaxe Mission"
              />
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Vision;
