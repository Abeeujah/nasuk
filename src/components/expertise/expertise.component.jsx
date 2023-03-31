import { Container } from "react-bootstrap";
import "./expertise.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeSimpleHigh,
  faGlobe,
  faSterlingSign,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";

const expertiseData = [
  {
    id: 0,
    icon: faGlobe,
    name: "global",
    description: `we are an intercontinental realty company with branches in 
    the UK, Dubai, Istanbul, and Nigeria. We are committed to providing premium 
    real estate services to clients across the globe.`,
  },
  {
    id: 1,
    icon: faSterlingSign,
    name: "best rate",
    description: `we offer the best rates in the property market, we believe that 
    everyone should be able to afford their dream home, without breaking the bank.`,
  },
  {
    id: 2,
    icon: faGaugeSimpleHigh,
    name: "quick",
    description: `we understand that in the fast-paced world we live in, time is 
    of the essence. That's why we have developed a streamlined process that eliminates delays.`,
  },
  {
    id: 3,
    icon: faTimeline,
    name: "flexible plans",
    description: `We understand that every client has preferences 
    when it comes to buying or selling a property. That's why we developed a range of 
    flexible plans that can be customized to meet your preference.`,
  },
];

const Expertise = () => {
  return (
    <>
      <Container fluid={true} className="bg-light py-3">
        <Container>
          <div className="expertise text-center text-black">
            <h4 className="text-uppercase fw-bold mb-3">why choose us</h4>
            <div className="expertise-container">
              {expertiseData.map(({ id, icon, name, description }) => (
                <div
                  key={id}
                  className="expertise-content mb-3 shadow rounded-4 px-1 py-3 text-capitalize white-background"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    size="3x"
                    className="nasblue-text mb-2"
                  />
                  <h5 className="fw-bold">{name}</h5>
                  <p className="text-dark">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Expertise;
