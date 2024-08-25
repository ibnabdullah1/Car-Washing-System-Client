import { AiOutlineArrowRight } from "react-icons/ai";

const Blogs = () => {
  return (
    <div className="bg-white">
      <div className="px-5 py-8 mx-auto lg:max-w-7xl md:px-10">
        <h2 className="heading text-center">Recent Updates</h2>
        <p className="font-sans text-center mb-12 text-gray-700">
          Accumsan lacus vel facilisis volutpat est velit egestas dui id.
          Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.
        </p>
        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          <BlogCard
            image={
              "https://carcareful.peacefulqode.in/wp-content/uploads/2024/01/blog-02-1.jpg"
            }
            title="Top Tips for Maintaining Your Car's Shine"
          />
          <BlogCard
            image={
              "https://carcareful.peacefulqode.in/wp-content/uploads/2024/01/blog-01.jpg"
            }
            title="The Benefits of Regular Car Washes"
          />
          <BlogCard
            image={
              "https://carcareful.peacefulqode.in/wp-content/uploads/2024/01/blog-03-1.jpg"
            }
            title="Why Hand Washes Are Better for Your Vehicle"
          />
          <BlogCard
            image={
              "https://carcareful.peacefulqode.in/wp-content/uploads/2024/01/blog-10-1.jpg"
            }
            title="Protecting Your Car’s Paint with Proper Care"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

const BlogCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="overflow-hidden group transition-shadow duration-300 bg-white rounded">
      <img src={image} className="object-cover w-full h-[160px]" alt="" />
      <div className="py-5 mb-4">
        <p className="text-xs font-semibold font-sans tracking-wide uppercase">
          <span
            className="transition-colors duration-200 text-primary border-r border-gray-300 pr-4"
            aria-label="Category"
            title="date"
          >
            5 SEP 2021
          </span>
          <span className="text-gray-600 px-4">2 comments</span>
        </p>
        <a
          href="#"
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 font-semibold pt-3 group-hover:text-primary duration-150 leading-5 text-gray-700"
        >
          {title}
        </a>

        <button className="flex items-center uppercase font-semibold text-sm gap-1 rounded-sm tracking-wide text-secondary transition-all cursor-pointer">
          <AiOutlineArrowRight className="p-1 text-2xl bg-primary text-white rounded-full" />{" "}
          Read More{" "}
        </button>
      </div>
    </div>
  );
};
