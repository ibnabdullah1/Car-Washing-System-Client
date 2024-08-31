import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/features/hooks";
import { verifyToken } from "../../utils/verifyToken";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setPasswordError("");

    const form = e.currentTarget;
    const userInfo = {
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const res = await login(userInfo).unwrap();
      setLoading(true);
      if (res.success) {
        const user = verifyToken(res?.token) as TUser;

        dispatch(setUser({ user, token: res?.token }));
        toast.success("Successfully logged in");
        setLoading(true);
        navigate(from, { replace: true });
      }
    } catch (err: any) {
      setPasswordError(err?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.06)",
        }}
        className="flex flex-col md:min-w-[400px] max-w-lg p-6 rounded-md sm:p-10 bg-white text-gray-900"
      >
        <div className="mb-8 text-center">
          <h1 className="my-3 text-2xl text-gray-800 font-bold">Log In</h1>
          <p className="text-xl font-semibold text-gray-600">
            Welcome to <span className="text-primary">AutoCare</span>
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
              />
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
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#1e69b899] w-full rounded-md transform font-semibold duration-500 hover:bg-primary py-3 text-white"
              disabled={loading}
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>

        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-[#D1A054] text-gray-400">
            Forgot password?
          </button>
        </div>

        <p className="px-6 mt-3 text-sm text-center text-gray-400">
          Don’t have an account?
          <Link
            to="/sign-up"
            className="hover:underline font-semibold hover:text-primary  text-primary outline-primary"
          >
            Sign Up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
