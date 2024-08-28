import Banner from "../../Components/Banner/Banner";
import CTA from "../../Components/CTA/CTA";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import WorkerOverview from "../../Components/WorkerOverview/WorkerOverview";
import AboutUs from "../About/About";
import Blogs from "../Blog/Blogs";
import Reviews from "../Reviews/Reviews";
import FeaturedServices from "../Services/FeaturedServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <WorkerOverview />
      <AboutUs />
      <FeaturedServices />
      <CTA />
      <Blogs />
      <Reviews />
      <NewsLetter />
    </div>
  );
};

export default Home;
