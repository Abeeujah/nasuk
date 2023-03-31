import { Container } from "react-bootstrap";
import "./pitch.styles.css";

const Pitch = () => {
  return (
    <>
      <Container fluid={true} className="pitch-bg py-5">
        <Container>
          <div className="text-center">
              <h2 className="text-white display-5 text-uppercase fw-bold">
                it doesn't matter who you are or where you are the bottom line is
                telling you to come home
              </h2>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Pitch;