import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const { user, confirmLogin, setConfirmLogin } = useContext(AuthContext);
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
        console.log(err);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setConfirmLogin(true);
        console.log(confirmLogin);
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  // useEffect(() => {
  //   if (user?.uid) {
  //     navigate("/");
  //     return;
  //   }
  // });

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
          {error == "auth/user-not-found" ? (
            <p style={{fontSize: '14px', color: 'red'}}>Email này chưa đăng ký.</p>
          ) : error == "auth/wrong-password" ? (
            <p style={{fontSize: '14px', color: 'red'}}>Mật khẩu không đúng.</p>
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
