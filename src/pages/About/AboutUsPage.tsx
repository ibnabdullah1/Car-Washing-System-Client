import FeaturedService from "../../Components/FeaturedService/FeaturedService";
import LinkBanner from "../../Components/LInkBanner/LinkBanner";
import Reviews from "../Reviews/Reviews";
import AboutUs from "./About";

const AboutUsPage = () => {
  return (
    <div>
      <LinkBanner ActiveLocation={"About Us"} subLocation={undefined} />
      <AboutUs />
      <FeaturedService />
      <Reviews />
    </div>
  );
};

export default AboutUsPage;
