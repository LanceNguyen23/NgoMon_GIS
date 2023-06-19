import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const { setConfirmLogin } = useContext(AuthContext);
  const auth = getAuth();
  const navigate = useNavigate();
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        setConfirmLogin(true);
        navigate(location.state.previousUrl);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleLoginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate(location.state.previousUrl);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/auth/register", {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      name: userName,
      role: "user",
    })
    .then(res => {
      console.log(res);
      navigate("/login")
    })
    .catch(({response}) => {
      console.log(response.data.message)
      setError(response.data.message)
    })
    return;
  };
  return (
    <>
      <Header address={[["Trang chủ", "/"], ["Mô hình 3D", "/modal3d"], ["Liên hệ", "/contact"]]}/>
      <div className="login_container">
        <h1 className="login_title">Đăng ký</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">Tên người dùng:</label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Mật khẩu:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="confirmPassword">Nhập lại mật khẩu:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error == "Password does not match" ? (
            <p style={{ color: "red", fontSize: "14px" }}>
              Mật khẩu không trùng khớp.
            </p>
          ) : error == "email already taken" ? (
            <p style={{ color: "red", fontSize: "14px" }}>
              Email này đã được đăng ký.
            </p>
          ) : (
            <></>
          )}
          <button type="submit">Đăng ký</button>
        </form>
        <div className="login_forgot_signUp">
          <nav>
            <NavLink to="/forgotpassword">Quên mật khẩu?</NavLink>
            <NavLink to="/login">Bạn đã có tài khoản?</NavLink>
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
