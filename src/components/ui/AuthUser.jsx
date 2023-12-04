//global
import { useSelector, useDispatch } from "react-redux";
//local
import { loginUser, logoutUser } from "../../app/auth";

const AuthUser = () => {
  const loginUserInfo = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(loginUserInfo);
  const loginHandler = () => {
    dispatch(loginUser({ user: "BOB" }));
  };

  const logoutHandler = () => {
    dispatch(logoutUser())
  }

  return (
    <div>
      {loginUserInfo.isUserLogin ? (
        <div className="flex gap-1">
          <div className="p-2 bg-white rounded-full">{loginUserInfo.user}</div>
          <button onClick={logoutHandler} >Logout</button>
        </div>
      ) : (
        <button onClick={loginHandler}>Login</button>
      )}
    </div>
  );
};

export default AuthUser;
