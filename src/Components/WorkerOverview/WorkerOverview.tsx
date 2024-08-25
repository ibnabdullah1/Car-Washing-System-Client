import image1 from "../../assets/Icon/augmented-reality-1.svg";
import image2 from "../../assets/Icon/automatic-transmission-1.svg";
import image3 from "../../assets/Icon/worker-1.svg";
const WorkerOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5 mb-10 relative top-0 lg:-top-12 py-10 px-5 lg:py-0">
      <div className="bg-secondary text-white p-8  rounded relative">
        <img src={image2} alt="" />
        <h2 className="text-xl font-semibold mt-4 ">Modern Workshop</h2>{" "}
        <p>Elements blocks from a range cate gories to build pages that</p>
        <img
          src={image2}
          alt=""
          className="absolute -right-10 -bottom-10 w-[200px] opacity-5"
        />
      </div>
      <div className="bg-blue text-white p-8  rounded relative">
        <img src={image3} alt="" />
        <h2 className="text-xl font-semibold mt-4 ">Talented Workers</h2>{" "}
        <p>Elements blocks from a range cate gories to build pages that</p>
        <img
          src={image3}
          alt=""
          className="absolute -right-10 -bottom-10 w-[200px] opacity-5"
        />
      </div>
      <div className="bg-red text-white p-8  rounded relative">
        <img src={image1} alt="" />
        <h2 className="text-xl font-semibold mt-4 ">Talented Workers</h2>{" "}
        <p>Elements blocks from a range cate gories to build pages that</p>
        <img
          src={image1}
          alt=""
          className="absolute -right-10 -bottom-10 w-[200px] opacity-5"
        />
      </div>
    </div>
  );
};

export default WorkerOverview;
