import Footer from "../../components/footer";
import Header from "../../components/header";
import "../contact/Contact.css";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
        <h1 className="contact-title">Liên Hệ</h1>
        <div className="contact-contain">
          <form className="contact-contain-form">
            <div className="contact-form">
              <label className="contact-form-title">Họ và tên:</label>
              <input
                className="contact-form-input"
                type="text"
                name="fullname"
              />
            </div>

            <div className="contact-form">
              <label className="contact-form-title">Số điện thoại:</label>
              <input
                className="contact-form-input"
                type="tel"
                name="numberphone"
              />
            </div>

            <div className="contact-form">
              <label className="contact-form-title">Email:</label>
              <input className="contact-form-input" type="email" name="email" />
            </div>

            <div className="contact-form">
              <label className="contact-form-title">Chủ đề:</label>
              <select
                className="contact-form-input"
                id="selectField"
                name="reason"
              >
                <option value="modal3D">Đóng góp thông tin di tích 3D</option>
                <option value="web">Góp ý trang web</option>
                <option value="more">Khác</option>
              </select>
            </div>

            <div className="contact-form">
              <label className="contact-form-title">Nội dung:</label>
              <textarea
                className="contact-form-textarea"
                type="text"
                name="message"
              />
            </div>
            <button className="submit">Gửi</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}
