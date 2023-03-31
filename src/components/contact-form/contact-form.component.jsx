import { useState } from "react";

import { Col, Container, FormLabel, Row } from "react-bootstrap";

import "./contact-form.styles.css";

const defaultFormFields = {
  name: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
  honeyPot: "",
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const { name, email, subject, phone, message, honeyPot } = formFields;

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormFields({ ...defaultFormFields });
    try {
      if (honeyPot !== "") {
        return;
      }
      const messageBody = JSON.stringify({
        name,
        email,
        subject,
        phone,
        message,
      });
      console.log(messageBody);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container fluid={true} className="white-background py-5">
        <Container>
          <div className="contact-form-container text-capitalize text-black place-center">
            <h2 className="fw-bold text-center mb-3">
              we'd love to hear from you
            </h2>
            <div className="form-container py-3">
              <form action="" onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <FormLabel>Name</FormLabel>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={name}
                        className="form-control"
                        required
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <FormLabel>Email</FormLabel>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                        className="form-control"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <FormLabel>Subject</FormLabel>
                      <input
                        type="text"
                        name="subject"
                        onChange={handleChange}
                        value={subject}
                        required
                        className="form-control"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <FormLabel>Phone</FormLabel>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        onChange={handleChange}
                        value={phone}
                        required
                        className="form-control"
                      />
                    </div>
                  </Col>
                  <Col md={6} className="bloc">
                    <div className="mb-3">
                      <FormLabel>Business Mail</FormLabel>
                      <input
                        type="email"
                        name="business"
                        id="business"
                        onChange={handleChange}
                        value={honeyPot}
                      />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="mb-3">
                      <FormLabel>Message</FormLabel>
                      <textarea
                        className="form-control"
                        name="message"
                        required
                        onChange={handleChange}
                        value={message}
                        rows="5"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="place-center pt-2">
                  <button
                    className="btn btn-lg px-4 rounded-0 nasblue-bg cta-btn"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default ContactForm;
