const ServiceLocationMap = () => {
  return (
    <div className="p-6 bg-slate-100 h-min rounded space-y-3">
      <div className="flex justify-between items-start">
        <p className="text-xl font-semibold my-2">Location</p>
        <p>Dhaka,Bangladesh</p>
      </div>
      <div className="relative w-full h-96">
        <iframe
          className="absolute inset-0 rounded"
          src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=dhaka+(Autocare)&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default ServiceLocationMap;
