import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
        <p className="text-3xl text-center font-semibold text-primary">404</p>

        <h1 className="mt-2 text-xl text-center font-bold tracking-tight text-gray-900 md:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="flex justify-center mt-3">
          {" "}
          <Link
            to={"/"}
            className="text-primary hover:text-white  hover:bg-primary border border-[#1e69b8] duration-300 px-3 py-1"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
