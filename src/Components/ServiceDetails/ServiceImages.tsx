const ServiceImages = ({ image }: any) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 mt-4">
      <div className="col-span-1  grid grid-cols-2 gap-4">
        <img
          src="https://media.torque.com.sg/public/2019/04/35413014_m.jpg"
          alt=""
          className="w-full h-full rounded object-cover"
        />
        <img
          src="https://autoimage.capitalone.com/cms/Auto/assets/images/2731-inset04-5-things-to-know-about-automatic-car-wash.jpg"
          alt=""
          className="w-full h-full rounded object-cover"
        />
        <img
          src="https://blog.way.com/wp-content/uploads/2021/10/professional-car-wash-1.jpg"
          alt=""
          className="w-full h-full rounded object-cover"
        />
        <img
          src="https://www.5kcarcare.com/branch-assets/assets/img/about.jpg"
          alt=""
          className="w-full h-full rounded object-cover"
        />
      </div>
      <div className="col-span-2 ">
        <img
          src={image}
          alt=""
          className="w-full h-full rounded object-cover"
        />
      </div>
    </div>
  );
};

export default ServiceImages;
