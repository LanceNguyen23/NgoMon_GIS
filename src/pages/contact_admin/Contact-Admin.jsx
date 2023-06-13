import "../contact_admin/Contact-Admin.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ContactAdmin() {
  // gửi mail
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // xóa

  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <div className="contact-admin">
      <div className="contact-admin-table">
        <div className="contact-admin-table-content">
          <div className="contact-admin-table-content-row">
            <h4 className="contact-admin-table-col1">#</h4>
            <h4 className="contact-admin-table-col2">Tên</h4>
            <h4 className="contact-admin-table-col2">Chủ đề</h4>
            <h4 className="contact-admin-table-col3">Nội dung</h4>
            <h4 className="contact-admin-table-col2">Chức năng</h4>
          </div>
        {/* lặp khúc này để map data ra */}
          <div className="contact-admin-table-content-row">
            <p className="contact-admin-table-col1">1</p>
            <p className="contact-admin-table-col2">No data</p>
            <p className="contact-admin-table-col2">
              Đóng góp thông tin di tích 3D
            </p>
            <p className="contact-admin-table-col3">
              df sf sdfs dfsfs fsfsd fsdfs dfs dfsd fsdf df sf sdfs dfsfs fsfsd
              fsdfs dfs dfsd fsdf df sf sdfs dfsfs fsfsd fsdfs dfs dfsd fsdf df
              sf sdfs dfsfs fsfsd fsdfs dfs dfsd fsdf
            </p>
            <div className="contact-admin-table-col">
              <button className="contact-btn-send" onClick={handleClickOpen}>
                Gửi mail
              </button>

              <button
                className="contact-btn-delete"
                onClick={handleClickOpenDelete}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
{/* lấy id của ng hiện và xủa lý xóa */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Bạn có muốn gửi mail cảm ơn đến tennd?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Khi bạn chọn gửi thì hệ thống sẽ gửi một mail đến người dùng
              teenNd. Để cảm ơn góp ý của họ đối với trang web và dự án của
              chúng ta
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Hủy</Button>
            <Button onClick={handleClose} autoFocus>
              Gửi
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openDelete}
          onClose={handleCloseDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Bạn có muốn xóa phản hồi tennd?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Khi bạn chọn xóa thì hệ thống sẽ phản hồi của tennd này ra khỏi hệ
              thống.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDelete}>Hủy</Button>
            <Button onClick={handleCloseDelete} autoFocus>
              Xóa
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
