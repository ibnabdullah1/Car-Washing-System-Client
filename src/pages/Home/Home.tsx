import Banner from "../../Components/Banner/Banner";
import CTA from "../../Components/CTA/CTA";
import FeaturedService from "../../Components/FeaturedService/FeaturedService";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import WorkerOverview from "../../Components/WorkerOverview/WorkerOverview";
import AboutUs from "../About/About";
import Blogs from "../Blog/Blogs";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <WorkerOverview />
      <AboutUs />
      <FeaturedService />
      <CTA />
      <Blogs />
      <Reviews />
      <NewsLetter />
    </div>
  );
};

export default Home;
