const ServiceVideo = () => {
  return (
    <div className="p-6 bg-slate-100 h-min rounded space-y-4">
      <p className="text-xl font-semibold my-2">Service Video</p>
      <div className="relative">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/3t2pgDv0ajU"
          title="Service Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded"
        ></iframe>
      </div>
    </div>
  );
};

export default ServiceVideo;
