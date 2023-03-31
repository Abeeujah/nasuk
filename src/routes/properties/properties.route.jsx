import PagesHero from "../../components/pages-hero/pages-hero.component";
import Property from "../../components/property/property.component";

import Image from "../../images/property-hero.webp";

const heroProps = {
  image: Image,
  header: "naskaxe investment and properties",
  text: "unlock the door to your dream home",
};

const Properties = () => {
  document.title = "Properties - Naskaxe and Investment and Property UK";
  
  return (
    <>
      <PagesHero heroProps={heroProps} />
      <Property />
    </>
  );
};

export default Properties;
