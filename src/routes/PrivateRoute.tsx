import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
const PrivateRoute = ({ children }: any) => {
  const location = useLocation();
  const user = useSelector(selectCurrentUser);
  if (user?.userEmail) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
