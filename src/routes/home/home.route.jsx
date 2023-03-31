import Close from "../../components/close/close.component";
import Expertise from "../../components/expertise/expertise.component";
import HeroIndex from "../../components/index-hero/hero.component";
import Pitch from "../../components/pitch/pitch.component";
import Portfolio from "../../components/portfolio/portfolio.component";
import Testimonial from "../../components/testimonial/testimonial.component";

const Home = () => {
  document.title = "Naskaxe and Investment and Property UK";

  return (
    <>
      <HeroIndex />
      <Pitch />
      <Portfolio />
      <Expertise />
      <Testimonial />
      <Close />
    </>
  );
};

export default Home;
