import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_logo">
        <img src={Logo}></img>
        <p className="footer_title">NGỌ MÔN HUẾ</p>
        <p className="footer_location">
          Phú Hậu, Thành phố Huế, Thừa Thiên Huế
        </p>
      </div>
      <div className="footer_barrier" />
      <div className="footer_navigation">
        <nav>
          <NavLink to="/">Trang chủ</NavLink>
          <NavLink to="/modal3d">Mô hình 3D</NavLink>
          <NavLink to="/contact">Liên hệ</NavLink>
        </nav>
        <div className="footer_barrierHorizontal" />
        <div className="footer_ct_map">
          <div className="footer_social_ct">
            <p>Theo dõi chúng tôi</p>
            <div className="footer_icons">
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: "#ffffff" }}
              />
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon icon={faGoogle} style={{ color: "#ffffff" }} />
            </div>
          </div>
          <div className="footer_map">
            <iframe
              width="480"
              height="105"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJQxZMyTOhQTERv6zPXThS_UM&key=AIzaSyD3CWnbER3xTw8l4uMN0McxkLYvBqHtMas"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
