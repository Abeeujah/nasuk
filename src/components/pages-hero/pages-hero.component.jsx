import { Container } from "react-bootstrap";
import "./pages-hero.styles.css";

const PagesHero = ({ heroProps }) => {
  const { image, header, text } = heroProps;

  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };

  return (
    <>
      <Container
        fluid={true}
        className="bg-white pages-height place-center"
        style={divStyle}
      >
        <Container>
          <div className="place-center heroes-container text-white place-center">
            <div className="text-center text-capitalize">
              <h1 className="fw-bold">{header}</h1>
              <p className="fw-bold">{text}</p>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default PagesHero;
