import ContactForm from "../../components/contact-form/contact-form.component";
import Gallery from "../../components/gallery/gallery.component";
import PagesHero from "../../components/pages-hero/pages-hero.component";

import Image from "../../images/contact-hero.webp";

const heroProps = {
  image: Image,
  header: "get in touch",
  text: "we're here to help",
};

const Contact = () => {
  document.title = "Contact - Naskaxe and Investment and Property UK";
  
  return (
    <>
      <PagesHero heroProps={heroProps} />
      <ContactForm />
      <Gallery />
    </>
  );
};

export default Contact;
