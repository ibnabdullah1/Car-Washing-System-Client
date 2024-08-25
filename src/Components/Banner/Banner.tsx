import bannerImage from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center font px-5 md:px-10 h-[350px] md:h-[550px]"
    >
      <div className="space-y-6">
        <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold leading-[40px]  md:leading-[65px] lg:leading-[90px]">
          Best Car Service in <br />
          The World
        </h1>
        <p className="text-white lg:text-2xl">
          There are many variations of passages of Lorem Ipsum available but{" "}
          <br className="md:flex hidden" />
          majority have suffered alteration in some form
        </p>
      </div>
    </div>
  );
};

export default Banner;
