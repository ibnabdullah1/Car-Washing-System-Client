import image1 from "../../assets/Icon/augmented-reality-1.svg";
import image2 from "../../assets/Icon/automatic-transmission-1.svg";
import image3 from "../../assets/Icon/worker-1.svg";

const WorkerOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5 mb-10 relative top-0 lg:-top-12 py-10 px-5 lg:py-0">
      <div className="bg-secondary text-white p-8 rounded relative overflow-hidden">
        <img src={image2} alt="Modern Workshop Icon" />
        <h2 className="text-xl font-semibold mt-4">
          State-of-the-Art Workshop
        </h2>
        <p>
          Our workshop is equipped with the latest technology for precise and
          efficient service.
        </p>
        <img
          src={image2}
          alt="Background Icon"
          className="absolute -right-10 -bottom-10 w-[200px] opacity-5"
        />
      </div>
      <div className="bg-blue text-white p-8 rounded relative overflow-hidden">
        <img src={image3} alt="Talented Workers Icon" />
        <h2 className="text-xl font-semibold mt-4">Skilled Technicians</h2>
        <p>
          Our team consists of highly trained professionals committed to
          top-quality service.
        </p>
        <img
          src={image3}
          alt="Background Icon"
          className="absolute -right-10 -bottom-10 w-[200px] opacity-5"
        />
      </div>
      <div className="bg-red text-white p-8 rounded relative overflow-hidden">
        <img src={image1} alt="Innovative Solutions Icon" />
        <h2 className="text-xl font-semibold mt-4">Innovative Solutions</h2>
        <p>
          We provide cutting-edge solutions to meet all your automotive needs.
        </p>
        <img
          src={image1}
          alt="Background Icon"
          className="absolute -right-10 -bottom-10 w-[200px] opacity-5"
        />
      </div>
    </div>
  );
};

export default WorkerOverview;
