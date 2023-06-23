import { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "../contact/Contact.css";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function Contact() {
  const [userIDMenu, setUserIDMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [content, setContent] = useState("");
  const [entityID, setEntityID] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSelectedChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue == "modal3D") setUserIDMenu(true);
    else setUserIDMenu(false);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://gis-historical-relic-management.vercel.app/api/damageReport/create", {
        cause: selectedOption,
        content: content,
        userID: localStorage.userID,
        entityID: entityID,
      })
      .then(() => {
        setOpen(true);
        setContent("");
        setEntityID(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <Header />
      <div className="contact">
        <h1 className="contact-title">Liên Hệ</h1>
        <div className="contact-contain">
          <form className="contact-contain-form" onSubmit={handleOnSubmit}>
            <div className="contact-form">
              <label className="contact-form-title">Chủ đề:</label>
              <select
                className="contact-form-input"
                id="selectField"
                name="reason"
                value={selectedOption}
                onChange={handleSelectedChange}
                style={{ paddingLeft: "15px" }}
              >
                <option value="none" hidden>Chọn chủ đề</option>
                <option value="modal3D">Đóng góp thông tin di tích 3D</option>
                <option value="web">Góp ý trang web</option>
                <option value="more">Khác</option>
              </select>
            </div>
            {userIDMenu ? (
              <div className="contact-form">
                <label className="contact-form-title">
                  ID vật thể (copy bên mô hình 3D):
                </label>
                <textarea
                  className="contact-form-textarea"
                  type="text"
                  name="message"
                  style={{ height: "60px" }}
                  required
                  value={entityID}
                  onChange={(e) => setEntityID(e.target.value)}
                />
              </div>
            ) : (
              <></>
            )}

            <div className="contact-form">
              <label className="contact-form-title">Nội dung:</label>
              <textarea
                className="contact-form-textarea"
                type="text"
                name="message"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button className="submit">Gửi</button>
          </form>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cảm ơn bạn !!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Phản hồi của bạn đã được gửi đến chúng tôi. Chúng tôi sẽ xem xét và
            mail lại để thông báo đến bạn.
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Footer />
    </>
  );
}
