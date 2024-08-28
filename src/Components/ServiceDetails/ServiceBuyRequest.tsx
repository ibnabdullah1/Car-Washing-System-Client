const ServiceBuyRequest = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      description: form.description.value,
    };
    console.log(data);
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-min bg-[#f9f7f4] px-6 py-10 space-y-6  rounded"
    >
      <div>
        <label htmlFor="name" className="block font-semibold mb-2">
          Name
        </label>
        <div className="mt-1 rounded-md">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="appearance-none block w-full px-3 pl-6 text-[16px] py-4 border border-transparent rounded-full placeholder-[#333333]/50 focus:outline-none focus:border-primary/50 transition duration-150 ease-in-out"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold mb-2">
          Email
        </label>
        <div className="mt-1 rounded-md">
          <input
            id="email"
            name="email"
            type="email" // Changed type to email for better validation
            placeholder="Your Email"
            required
            className="appearance-none block w-full px-3 pl-6 text-[16px] py-4 border border-transparent rounded-full placeholder-[#333333]/50 focus:outline-none focus:border-primary/50 transition duration-150 ease-in-out"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block font-semibold mb-2">
          Phone No.
        </label>
        <div className="mt-1 rounded-md">
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="+123456"
            required
            className="appearance-none block w-full px-3 pl-6 text-[16px] py-4 border border-transparent rounded-full placeholder-[#333333]/50 focus:outline-none focus:border-primary/50 transition duration-150 ease-in-out"
          />
        </div>
      </div>
      <div>
        <label htmlFor="description" className="block font-semibold mb-2">
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          name="description"
          className="appearance-none block w-full px-3 pl-6 text-[16px] py-4 border border-transparent rounded-3xl placeholder-[#333333]/50 focus:outline-none focus:border-primary/50 transition duration-150 ease-in-out"
          placeholder="I'm interested in this property..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-6 py-4 rounded-full bg-[#333333] text-white font-semibold hover:bg-primary duration-500"
      >
        Submit Request
      </button>
    </form>
  );
};

export default ServiceBuyRequest;
