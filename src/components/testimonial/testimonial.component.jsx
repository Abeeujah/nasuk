import { useState } from "react";

import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

import Image from "../../images/hunter-so-0aDppK_puk0-unsplash.webp";
import "./testimonial.styles.css";
import Button from "../button/button.component";

const testimonyData = [
  {
    id: 0,
    image: Image,
    name: "Atiku Abubakar",
    role: "Business Mogul",
    testament: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Accusamus expedita modi esse nulla odit voluptas dicta in
    maxime, similique ipsum illum a, cum facere facilis doloribus
    iste aperiam voluptatibus tempora fugit quod blanditiis tempore
    nihil velit iusto! Corporis, repellat dolor!`,
  },
  {
    id: 1,
    image: Image,
    name: "Bola Tinubu",
    role: "GM Union Bank",
    testament: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Accusamus expedita modi esse nulla odit voluptas dicta in
    maxime, similique ipsum illum a, cum facere facilis doloribus
    iste aperiam voluptatibus tempora fugit quod blanditiis tempore
    nihil velit iusto! Corporis, repellat dolor!`,
  },
  {
    id: 2,
    image: Image,
    name: "Peter Obi",
    role: "MD Conoil",
    testament: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Accusamus expedita modi esse nulla odit voluptas dicta in
    maxime, similique ipsum illum a, cum facere facilis doloribus
    iste aperiam voluptatibus tempora fugit quod blanditiis tempore
    nihil velit iusto! Corporis, repellat dolor!`,
  },
];

const Testimonial = () => {
  const [count, setCount] = useState(0);

  const truth = testimonyData.length - 1;

  const incrementCount = () =>
    count < truth ? setCount(count + 1) : setCount(0);
  const decrementCount = () =>
    count > 0 ? setCount(count - 1) : setCount(truth);

  return (
    <>
      <Container fluid={true} className="bg-black text-white py-5">
        <Container>
          <div className="text-capitalize place-center">
            <h5 className="fw-bold">hear what people say about us</h5>
            {testimonyData
              .filter((testimony) => testimony.id === count)
              .map(({ id, image, name, role, testament }) => (
                <div key={id} className="testimony mb-3">
                  <p className="text-center">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className=""
                    />
                    {` ${testament} `}
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className=""
                    />
                  </p>
                  <div className="bio">
                    <div className="testimony-imgh">
                      <img
                        className="image-cont rondo"
                        src={image}
                        alt="Happy Client"
                      />
                    </div>
                    <div className="place-center">
                      <h6 className="pt-2 fw-bold">{name}</h6>
                      <p>{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            <div className="controls">
              <Button
                handleClick={decrementCount}
                label={"Previous"}
                children={<FontAwesomeIcon icon={faArrowLeft} />}
              />
              <Button
                handleClick={incrementCount}
                label={"Next"}
                children={<FontAwesomeIcon icon={faArrowRight} />}
              />
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Testimonial;
