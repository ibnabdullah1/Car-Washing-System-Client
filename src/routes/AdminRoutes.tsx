import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentUser } from "../redux/features/auth/authSlice";
const AdminRoute = ({ children }: any) => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  if (user?.userEmail && user?.role === "admin") {
    return children;
  } else {
    dispatch(logout());
  }
};

export default AdminRoute;
