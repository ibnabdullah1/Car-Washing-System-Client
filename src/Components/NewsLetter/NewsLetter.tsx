const NewsLetter = () => {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="px-6 py-6 md:px-12 lg:flex lg:items-center lg:px-16">
          <div className="lg:flex-1 xl:w-0">
            <h2 className="text-2xl font-semibold font-questrial- tracking-tight text-white sm:text-3xl">
              Email Newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
              Sign up for our email newsletter to stay up to date.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form className="sm:flex gap-3" id="revue-form" target="_blank">
              <input
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-blue/70 text-white px-4 rounded-md hover:bg-blue"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-sm text-indigo-200">
              We will never send any spam emails. Promise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
