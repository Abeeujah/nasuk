import { Container } from "react-bootstrap";
import "./stats.styles.css";

const Stats = () => {
  return (
    <>
      <Container fluid={true} className="bg-black py-3 text-white">
        <Container>
          <div className="stats-container">
            <div className="place-center">
              <h4>25+</h4>
              <p>agents</p>
            </div>
            <div className="place-center">
              <h4>100+</h4>
              <p>properties</p>
            </div>
            <div className="place-center">
              <h4>3+</h4>
              <p>continents</p>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Stats;