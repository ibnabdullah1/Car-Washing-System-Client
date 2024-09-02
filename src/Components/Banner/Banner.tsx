import bannerImage from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center font px-5 md:px-10 h-[350px] md:h-[650px]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-6">
          <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold leading-[40px] md:leading-[65px] lg:leading-[90px]">
            Premium Auto Care <br />
            Services in Dhaka
          </h1>
          <p className="text-white lg:text-2xl">
            Experience top-notch car maintenance and repair services.{" "}
            <br className="md:flex hidden" />
            Trusted by thousands of customers across Dhaka.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
