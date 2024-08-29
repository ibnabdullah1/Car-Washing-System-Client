import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../redux/features/auth/authApi";
import { imageUpload } from "../../utils/utilis";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();
  const handleRegister = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const password = form.password.value;
    const image = form.image.files[0];

    // Clear previous errors
    setPasswordError("");
    setEmailError("");

    // Password validation
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    try {
      // Upload image
      const imageData = await imageUpload(image);
      const photoUrl = imageData?.data?.display_url;

      // Send registration request
      const userInfo = {
        name,
        email,
        phone,
        address,
        role: "user",
        password,
        isDeleted: false,
        profileUrl: photoUrl,
      };
      const res = await signUp(userInfo).unwrap();
      if (res.success) {
        navigate("/login");
        setLoading(false);
        toast.success("Registration successful!");
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.message || "Registration failed");
    }
  };
  return (
    <div className="flex justify-center items-center py-20">
      <div
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.06)" }}
        className="flex flex-col md:min-w-[500px] max-w-lg p-6 rounded-md sm:p-10 bg-white text-gray-900"
      >
        <div className="mb-8 text-center">
          <h1 className="my-3 text-2xl text-gray-800 font-bold">Sign Up</h1>
          <p className="text-xl font-semibold text-gray-600">
            Welcome to <span className="text-primary">AutoCare</span>
          </p>
        </div>
        <form
          onSubmit={handleRegister}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
              />
            </div>
            <div>
              <input
                type="number"
                name="phone"
                id="phone"
                required
                placeholder="Your phone number"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                id="address"
                required
                placeholder="Your address"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
              />
            </div>
            <div>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
              />
              {emailError && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.8rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {emailError}
                </p>
              )}
            </div>
            <div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
                />
                <span
                  className="absolute top-[14px] right-4 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {passwordError && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.8rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {passwordError}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#1e69b899] w-full rounded-md transform font-semibold duration-100 hover:bg-primary py-3 text-white"
              disabled={loading}
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
            <button
              type="button"
              className="text-xs hover:underline hover:text-primary text-gray-400 mt-2"
            >
              Forgot password?
            </button>
          </div>

          <p className="px-6 mt-3 text-sm text-center text-gray-400">
            Don’t have an account?
            <Link
              to="/login"
              className="hover:underline font-semibold hover:text-primary text-primary"
            >
              Sign In
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
