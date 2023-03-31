import { Container } from "react-bootstrap";
import "./footer.styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Container fluid={true} className="bg-black text-white py-3">
        <Container>
          <footer>
            <div className="footer-container">
              <div className="footer-nav mb-3">
                <div className="footer-nav-holder">
                  <p className="">
                    Thames innovation center, 2 veridion way,{" "}
                    <br className="d-none d-md-block" /> Erith Kent DA8 4AL
                  </p>
                  <div className="tel-mail">
                    <a className="tel-mail-link" href="tel:+2349039301500">
                      +2349039301500
                    </a>
                    <a
                      className="tel-mail-link"
                      href="mailto:info@naskaxeproperty.com"
                    >
                      info@naskaxeproperty.com
                    </a>
                  </div>
                </div>
                <div className="footer-nav-holder h-100">
                  <Link to={"/about"} className="footer-navs">
                    About
                  </Link>
                  <Link to={"/properties"} className="footer-navs">
                    Properties
                  </Link>
                  <Link to={"/contact"} className="footer-navs">
                    Contact Us
                  </Link>
                </div>
                <div className="footer-nav-holder h-100">
                  <a href="/me" className="footer-navs">
                    Facebook
                  </a>
                  <a href="/le" className="footer-navs">
                    Instagram
                  </a>
                  <a href="/fe" className="footer-navs">
                    Twitter
                  </a>
                </div>
              </div>
              <p className="text-center">Copyright &copy; {year} Naskaxe UK</p>
            </div>
          </footer>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
