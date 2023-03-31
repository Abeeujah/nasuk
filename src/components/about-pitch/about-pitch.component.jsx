import { Container } from "react-bootstrap";
import "./about-pitch.styles.css";

const AboutPitch = () => {
  return (
    <>
      <Container fluid={true} className="py-3">
        <Container>
          <div className="about-pitch-container mb-5">
            <h2 className="text-uppercase">
              <span className="text-black">n</span>
              <span className="nasred-text">a</span>
              <span className="nasblue-text">sk</span>
              <span className="nasred-text">a</span>
              <span className="nasblue-text">xe</span>
            </h2>
            <p className="text-capitalize">
              Naskaxe Investment and Property has established itself as a
              leading global firm, with a presence across multiple continents,
              including the UK, Turkey, Dubai, and Nigeria. Our team of
              reputable investment advisors and risk analysts offer tailored
              advice to clients, helping them navigate the complexities of
              investing in a range of properties, from residential to commercial
              and beyond
            </p>
          </div>
          <hr className="mx-auto form-container" />
        </Container>
      </Container>
    </>
  );
};

export default AboutPitch;
