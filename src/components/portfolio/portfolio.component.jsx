import { Container } from "react-bootstrap";
import "./portfolio.styles.css";

import Image from "../../images/test-project.webp";
import Imagen from "../../images/test-project1.webp";
import Imagex from "../../images/test-project2.webp";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 0,
    image: Image,
    street: "1 chapel hill,",
    town: "hesswall",
    state: "bournemouth",
  },
  {
    id: 1,
    image: Imagen,
    street: "thames innovation center,",
    town: "veridion way",
    state: "london",
  },
  {
    id: 2,
    image: Imagex,
    street: "1 chapel hill,",
    town: "hesswall",
    state: "bournemouth",
  },
];

const Portfolio = () => {
  return (
    <>
      <Container fluid={true} className="py-5 bg-light">
        <Container>
          <div className="proj-guide mb-4">
            <h3 className="text-capitalize text-black">our properties</h3>
            <Link
              className="btn btn-lg px-4 rounded-0 nasblue-bg cta-btn"
              to={"/properties"}
            >
              Properties
            </Link>
          </div>
          <div className="proj-main">
            {portfolioItems.map(({ id, image, street, town, state }) => (
              <div key={id} className="proj-child">
                <img className="proj-images" src={image} alt="Beautiful Room" />
                <span className="proj-desc text-white">
                  <h4 className="text-uppercase fw-bold">{street}</h4>
                  <h4 className="text-uppercase fw-bold">{town}</h4>
                  <p className="text-capitalize">{state}</p>
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Portfolio;
