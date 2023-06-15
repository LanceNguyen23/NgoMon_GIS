import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function SignUp() {
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
        navigate("/");
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
        setConfirmLogin(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("login", user);
          navigate("/login");
        })
        .catch((error) => {
          setError(error.code);
        });
    } else {
      setError("No match");
    }
    return;
  };
  return (
    <>
      <Header />
      <div className="login_container">
        <h1 className="login_title">Đăng ký</h1>
        <form onSubmit={handleSubmit}>
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
          {error == "No match" ? (
            <p style={{ color: "red", fontSize: "14px" }}>
              Mật khẩu không trùng khớp.
            </p>
          ) : error == "auth/weak-password" ? (
            <p style={{ color: "red", fontSize: "14px" }}>
              Mật khẩu phải có ít nhất 6 ký tự.
            </p>
          ) : error == "auth/email-already-in-use" ? (
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
