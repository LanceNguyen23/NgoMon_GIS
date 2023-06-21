import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://gis-historical-relic.onrender.com/api/auth/login", {
        email: email,
        password: password,
        role: "admin"
      })
      .then(({ data }) => {
        localStorage.setItem("accessToken", data.tokens.accessToken);
        localStorage.setItem("userName", data.currentUser.name);
        localStorage.setItem("role", data.currentUser.role);
        localStorage.setItem("confirmLogin", true)

        navigate("contact_admin");
      })
      .catch(({ response }) => {
        setError(response.data.message);
      });
  };
  return (
    <div
      className="loginAdmin_Container"
      style={{
        height: "100vh",
        backgroundColor: "#f2efed",
        paddingTop: "150px",
      }}
    >
      <div
        className="login_container"
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "500px",
          padding: "0 50px",
        }}
      >
        <h1 className="login_title" style={{ marginTop: "70px" }}>
          Đăng nhập
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Tên đăng nhập:</label>
          <input
            type="text"
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
            <p style={{ fontSize: "14px", color: "red" }}>Email không đúng.</p>
          ) : error == "Incorrect  password" ? (
            <p style={{ fontSize: "14px", color: "red" }}>
              Mật khẩu không đúng.
            </p>
          ) : (
            <></>
          )}
          <button type="submit" style={{ marginBottom: "50px" }}>
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
