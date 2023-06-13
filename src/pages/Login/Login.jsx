import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";

export default function Login() {
  const { user } = useContext(AuthContext);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    console.log(res);
  };

  useEffect(() =>{
    if (user?.uid) {
      navigate("/");
      return;
    }
  })

  
  return (
    <>
      <Header />
      <div className="login_container">
        <h1 className="login_title">Đăng nhập</h1>
        <form>
          <label>Email:</label>
          <input type="email" />
          <label>Mật khẩu:</label>
          <input type="password" />
          <button type="submit">Đăng nhập</button>
        </form>
        <div className="login_forgot_signUp">
          <nav>
            <NavLink to="/forgotpassword">Quên mật khẩu?</NavLink>
            <NavLink to="/signup">Tạo tài khoản</NavLink>
          </nav>
        </div>
        <div className="login_otherSignIn">
          <p>Đăng nhập bằng</p>
          <div className="login_fb_gg">
            <button>
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: "#146ebe" }}
              />{" "}
              Facebook
            </button>
            <button onClick={handleLoginWithGoogle}>
              <FontAwesomeIcon icon={faGoogle} style={{ color: "#e9553c" }} />{" "}
              Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}