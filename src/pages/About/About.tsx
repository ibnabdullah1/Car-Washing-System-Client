import { BiCreditCard, BiGlobe, BiHomeAlt } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className="pt-16 pb-20 fixed-w">
      <div className="flex flex-wrap gap-24">
        {/* Image Section */}
        <div className="relative flex-1 basis-[18rem] border">
          <img
            src="https://dlcarspa.droitlab.com/wp-content/uploads/2022/01/Tunnel-Wash-1.jpg"
            alt="Car Wash Service"
            className="object-cover w-full h-full rounded-lg"
          />
          <img
            src="https://dlcarspa.droitlab.com/wp-content/uploads/2022/01/Rectangle-771-2-1.jpg"
            alt="Professional Car Wash"
            className="absolute object-cover w-48 h-64 border-4 border-white rounded-lg sm:w-72 sm:h-80 dark:border-dark -bottom-20 -right-2 md:-right-20"
          />
        </div>

        {/* Text Content Section */}
        <div className="relative flex-1 basis-[22rem]">
          <h1 className="heading">Your Car Deserves the Best Care</h1>
          <p className="mt-3">
            At our car wash, we are committed to delivering exceptional service
            that leaves your vehicle looking like new. Our experienced team uses
            the latest techniques and eco-friendly products to provide a
            thorough and safe clean. We pride ourselves on our attention to
            detail and dedication to customer satisfaction.
          </p>
          <div className="mt-4">
            {/* Feature 1: Superior Car Care */}
            <div className="flex items-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiHomeAlt />
              </div>
              <div>
                <h1 className="font-semibold capitalize">Superior Car Care</h1>
                <p>
                  We offer comprehensive cleaning services, including exterior
                  washes, interior detailing, and tire shining, ensuring every
                  part of your car is spotless.
                </p>
              </div>
            </div>

            {/* Feature 2: Eco-Friendly Solutions */}
            <div className="mt-3 flex items-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiGlobe />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  Eco-Friendly Solutions
                </h1>
                <p>
                  We use environmentally safe products and techniques that not
                  only clean your car but also protect the environment.
                </p>
              </div>
            </div>

            {/* Feature 3: Transparent Pricing */}
            <div className="mt-3 flex items-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiCreditCard />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  Transparent Pricing
                </h1>
                <p>
                  We believe in honesty and transparency. Our pricing is clear,
                  with no hidden fees, so you always know what you're paying
                  for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
