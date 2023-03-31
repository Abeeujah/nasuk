import { Container } from "react-bootstrap";

import Image from "../../images/mission-image.webp";

import "./mission.styles.css";

const missionData = {
  header: `our mission`,
  text: `At Naskaxe Investment and Property, we are dedicated to
  empowering our clients to achieve their investment goals. We do
  this by providing expert guidance, personalized service, and a
  commitment to excellence. As a leading provider of property
  investment services, we offer access to a diverse range of
  investment opportunities and deliver exceptional value to our
  clients. Our success is measured by the success of our clients,
  and we take pride in building long-lasting relationships that
  help them achieve their investment goals`,
};

const Mission = () => {
  const { header, text } = missionData;
  return (
    <>
      <Container fluid={true} className="pt-5 pb-3">
        <Container>
          <div className="mission-mobile-container mb-3">
            <div className="mission-mobile-img mb-3">
              <h4 className="text-black text-capitalize fw-bold">{header}</h4>
              <div className="hide-overflow rounded-2">
                <img
                  className="mission-image hover-scale rounded-2"
                  src={Image}
                  alt="Naskaxe Mission"
                />
              </div>
            </div>
            <div className="mission-mobile-text">
              <p className="text-capitalize text-dark">{text}</p>
            </div>
          </div>
          <div className="mission-container">
            <div className="mission-img rounded-2 hide-overflow">
              <img
                className="rounded-2 hover-scale"
                src={Image}
                alt="Naskaxe Mission"
              />
            </div>
            <div className="mission-text">
              <h4 className="text-black text-capitalize fw-bold">{header}</h4>
              <p className="text-dark text-capitalize">{text}</p>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Mission;
