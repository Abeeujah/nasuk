import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMessage } from "@fortawesome/free-regular-svg-icons";

import "./close.styles.css";
import { Link } from "react-router-dom";

const Close = () => {
  return (
    <>
      <Container fluid={true} className="bg-light py-3">
        <Container>
          <div className="close-container text-capitalize text-black">
            <div className="place-center">
              <h6 className="fw-bold text-center">get in touch</h6>
              <div className="trekker">
                <div className="trek-img">
                  <p className="h2 fw-bold text-uppercase text-center text-md-start display-5">
                    let's get you your{" "}
                    <span className="nasblue-text">dream home</span> today. get
                    in touch
                  </p>
                </div>
                <div className="trek-cta">
                  <a
                    className="btn btn-lg px-4 rounded-pill nasblue-bg cta-btn eff"
                    href="mailto:info@naskaxeproperty.com"
                  >
                    Direct Email{" "}
                    <FontAwesomeIcon className="close-eff" icon={faEnvelope} />
                  </a>
                  <Link
                    className="btn btn-lg px-4 rounded-pill nasred-bg cta-danger eff"
                    to={"/contact"}
                  >
                    contact us{" "}
                    <FontAwesomeIcon className="close-eff" icon={faMessage} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Close;
