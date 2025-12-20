import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { login } from "./store/slice/user/user.slice";
import { loginUserThunk } from "./store/slice/user/user.thunk";

function App() {
  const { isAuthenticated } = useSelector((state) => state.userSlice);
  console.log(isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUserThunk());
  });

  return <></>;
}

export default App;
