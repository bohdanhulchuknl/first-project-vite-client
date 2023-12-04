//global
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthProtect = ({ children }) => {
  const loginUserInfo = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginUserInfo.isLogin) {
      toast.error("PROTECTED")
      navigate("/")
    }
  }, [loginUserInfo.isLogin, navigate]);

  if (!loginUserInfo.isLogin) return <>PROTECTED</>;
  
  return children;
};

export default AuthProtect;
