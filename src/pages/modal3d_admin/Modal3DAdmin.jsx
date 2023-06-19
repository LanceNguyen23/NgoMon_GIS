import axios from "axios";
import HeaderAdmin from "../../components/header/HeaderAdmin";
import "../modal3d_admin/Modal3DAdmin.css";
import "./Modal3DAdmin.css";
import { useState } from "react";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function Modal3DAdmin() {
  const [isVisible, setIsVisible] = useState(false);
  const [pathEntity, setPathEntity] = useState("");
  const [newEntity, setNewEntity] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const url = `https://gis-historical-relic.onrender.com/api/${selectedOption}/update?path=${pathEntity}`
    console.log(url)
    axios.put(url, newEntity)
    .then(() => {
      setOpen(true);
      setPathEntity("");
      setNewEntity("");
    })
    .catch((err) => {
      console.error(err);
    });
  }

  console.log(selectedOption)
  console.log(pathEntity)
  console.log(newEntity)

  return (
    <>
      <HeaderAdmin />
      <iframe
        src="https://arcgislab2-nhom1.netlify.app/?fbclid=IwAR1h9l76heg76QuSqvZLTBRXGp8CThQ5389LevX8t58lrYQbcJ9xdl_omRE"
        className="model3d_frame"
      />
      <div>
        <button className="modal3d-admin-btn-update" onClick={handleClick}>
          Cập nhật thông tin
        </button>
        <div
          className="modal3d-admin-form-update"
          style={{ display: isVisible ? "block" : "none" }}
        >
          <h3 className="modal3d-admin-form-update-title">
            Chỉnh sửa thông tin các thực thể Ngọ Môn
          </h3>
          <form className="modal3d-admin-form-update-form" onSubmit={handleOnSubmit}>
            <div className="contact-form">
              <label className="contact-form-title">Loại thực thể:</label>
              <select
                className="contact-form-input"
                id="selectField"
                name="kindOfEntity"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                style={{ paddingLeft: "15px" }}
              >
                <option value="none" hidden>
                  Chọn loại thực thể
                </option>
                <option value="bodyComplex">Body complex (Mái, cong cổng)</option>
                <option value="cylinder">Cylinder (Cột trụ)</option>
                <option value="prism">Prism (Còn lại)</option>
              </select>
            </div>
            <div className="contact-form">
              <label className="contact-form-title">Path vật thể:</label>
              <input
                className="contact-form-textarea"
                type="text"
                name="message"
                style={{ height: "40px" }}
                required
                value={pathEntity}
                onChange={(e)=>setPathEntity(e.target.value)}
              />
            </div>

            <div className="contact-form">
              <label className="contact-form-title">Mô tả mới (JSON):</label>
              <input
                className="contact-form-textarea"
                type="text"
                name="name"
                style={{ height: "40px" }}
                required
                value={newEntity}
                onChange={(e)=>setNewEntity(e.target.value)}
              />
            </div>
            <button
              className="submit"
              style={{ marginLeft: "75%", width: "25%", borderRadius: "10px" }}
            >
              Cập nhật
            </button>
          </form>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thành công !!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Đã cập nhật thành công thông tin thực thể.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
