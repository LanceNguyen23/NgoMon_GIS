import { NavLink } from "react-router-dom";
import Header from "../../components/header";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sucess, setSucess] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSucess(true);
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <>
      <Header />
      <div className="login_container" style={{ width: "435px" }}>
        <h1 className="login_title">Đổi mật khẩu</h1>
        {sucess ? (
          <p style={{ fontSize: "20px", lineHeight: "30px" }}>
            Form reset mật khẩu đã gửi vào email của bạn. Quay về trang{" "}
            <NavLink to="/login">ĐĂNG NHẬP</NavLink>
          </p>
        ) : (
          <>
            <p
              className="forgotPassword_description"
              style={{ fontSize: "18px", marginBottom: "10px" }}
            >
              Nhập email đã đăng ký vào ô dưới để reset mật khẩu
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
              {error == "auth/user-not-found" ? (
                <p style={{ fontSize: "14px", color: "red" }}>
                  Email này chưa đăng ký.
                </p>
              ) : (
                <></>
              )}
              <button type="submit">Reset mật khẩu</button>
            </form>
            <div className="login_forgot_signUp">
              <nav>
                <NavLink to="/login">Bạn đã nhớ lại mật khẩu?</NavLink>
                <NavLink to="/signup">Tạo quách tài khoản mới?</NavLink>
              </nav>
            </div>
          </>
        )}
      </div>
    </>
  );
}
