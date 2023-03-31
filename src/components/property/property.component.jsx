import { Container } from "react-bootstrap";

import Image from "../../images/hunter-so-0aDppK_puk0-unsplash.webp";

import "./property.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBathtub,
  faBed,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";

const damn = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const Property = () => {
  return (
    <>
      <Container fluid={true}>
        <Container>
          <div className="property-border">
            <div className="properties-container py-3">
              {damn.map(({ id }) => (
                <div key={id} className="property-container p-2 shadow rounded-3">
                  <div className="hide-overflow display-image rounded-3 white-background">
                    <img
                      className="hover-scale rounded-3"
                      src={Image}
                      alt="Property Image"
                    />
                  </div>
                  <div className="property-name">
                    <span className="text-black">
                      <h4 className="text-uppercase fw-bold">1 chapel hill</h4>
                      <h4 className="text-uppercase fw-bold">hesswall</h4>
                      <p className="text-capitalize">bournemouth</p>
                    </span>
                  </div>
                  <div className="stats-container">
                    <div className="stat place-center">
                      <p className="m-0">2 beds</p>
                      <FontAwesomeIcon icon={faBed} />
                    </div>
                    <div className="stat place-center">
                      <p className="m-0">2 baths</p>
                      <FontAwesomeIcon icon={faBathtub} />
                    </div>
                    <div className="stat place-center">
                      <p className="m-0">500sqm</p>
                      <FontAwesomeIcon icon={faRulerCombined} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Property;
