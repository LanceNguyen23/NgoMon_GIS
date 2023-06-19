import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        localStorage.setItem("confirmLogin", true)
        navigate(location.state.previousUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        localStorage.setItem("confirmLogin", true)
        navigate(location.state.previousUrl);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://gis-historical-relic.onrender.com/api/auth/login", {
        email: email,
        password: password
      })
      .then(({ data }) => {
        localStorage.setItem("confirmLogin", true)
        localStorage.setItem("accessToken", data.tokens.accessToken);
        localStorage.setItem("userName", data.currentUser.name);
        localStorage.setItem("userID", data.currentUser._id);
        navigate(location.state.previousUrl || "/");
      })
      .catch(({ response }) => {
        console.log(response.data.message);
        setError(response.data.message);
      });
  };

  return (
    <>
      <Header />
      <div className="login_container">
        <h1 className="login_title">Đăng nhập</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error == "Incorrect email" ? (
            <p style={{ fontSize: "14px", color: "red" }}>
              Email không đúng.
            </p>
          ) : error == "Incorrect  password" ? (
            <p style={{ fontSize: "14px", color: "red" }}>
              Mật khẩu không đúng.
            </p>
          ) : (
            <></>
          )}
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
            <button onClick={handleLoginWithFacebook}>
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
