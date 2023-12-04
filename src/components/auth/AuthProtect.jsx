//global
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthProtect = ({ children }) => {
  const loginUserInfo = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginUserInfo.isLogin) navigate("/");
  }, [loginUserInfo.isLogin, navigate]);

  if (!loginUserInfo.isLogin) return <>PROTECTED</>;
  
  return children;
};

export default AuthProtect;
