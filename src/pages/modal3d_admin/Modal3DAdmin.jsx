import HeaderAdmin from "../../components/header/HeaderAdmin";
import "../modal3d_admin/Modal3DAdmin.css"

export default function Modal3DAdmin() {
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
          <form className="modal3d-admin-form-update-form">
            <div className="contact-form">
              <label className="contact-form-title">ID vật thể:</label>
              <input
                className="contact-form-textarea"
                type="text"
                name="message"
                style={{ height: "40px" }}
                required
              />
            </div>

            <div className="contact-form">
              <label className="contact-form-title">Mô tả mới:</label>
              <input
                className="contact-form-textarea"
                type="text"
                name="name"
                style={{ height: "40px" }}
                required
              />
            </div>
            <button className="submit">Cập nhật</button>
          </form>
        </div>
      </div>
    </>
  );
}
