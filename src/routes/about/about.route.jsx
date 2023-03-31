import PagesHero from "../../components/pages-hero/pages-hero.component";
import AboutPitch from "../../components/about-pitch/about-pitch.component";

import Image from "../../images/about-hero.webp";
import PitchGrid from "../../components/pitch-grid/pitch-grid.component";
import Stats from "../../components/stats/stats.component";
import Mission from "../../components/mission/mission.component";
import Vision from "../../components/vision/vision.component";
import AboutGallery from "../../components/about-gallery/about-gallery.component";

const heroProps = {
  image: Image,
  header: "a purpose driven real estate company",
  text: "here to help you find the place you call home",
};

const About = () => {
  document.title = "About - Naskaxe and Investment and Property UK";
  
  return (
    <>
      <PagesHero heroProps={heroProps} />
      <AboutPitch />
      <PitchGrid />
      <Stats />
      <Mission />
      <Vision />
      <AboutGallery />
    </>
  );
};

export default About;
