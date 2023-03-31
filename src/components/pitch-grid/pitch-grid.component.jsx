import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingCircleCheck,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

import "./pitch-grid.styles.css";

const pitchData = [
  {
    id: 0,
    icon: faBuildingCircleCheck,
    header: "premier realtor company",
    text: `We work with reputable builders and developers to ensure that
    all our properties are of the highest quality and guaranteed
    durability, We have an extensive network of contacts in the UK
    property market, giving us access to a wide range of properties
    that meet your requirements.`,
  },
  {
    id: 1,
    icon: faPeopleArrows,
    header: "commitment to clients",
    text: `owning a property can be quite a daunting process, we offer a
    range of services to help make the process as smooth as
    possible. Our team can provide advice on financing, legal
    issues, and property management, ensuring that you have all the
    support you need throughout the process.`,
  },
];

const PitchGrid = () => {
  return (
    <>
      <Container fluid={true} className="py-3">
        <Container>
          <div className="pitch-grid">
            {pitchData.map(({ id, icon, header, text }) => (
              <div key={id} className="pitch-item place-center text-capitalize">
                <FontAwesomeIcon icon={icon} size="3x" className="mb-3 text-black" />
                <h3 className="text-black">{header}</h3>
                <p className="">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </>
  );
};

export default PitchGrid;
