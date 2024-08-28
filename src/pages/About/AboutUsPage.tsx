import LinkBanner from "../../Components/LInkBanner/LinkBanner";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import AboutUs from "./About";

const AboutUsPage = () => {
  return (
    <div>
      <LinkBanner ActiveLocation={"About Us"} />
      <AboutUs />
      <Services />
      <Reviews />
    </div>
  );
};

export default AboutUsPage;
