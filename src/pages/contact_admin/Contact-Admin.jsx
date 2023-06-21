import "../contact_admin/Contact-Admin.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import HeaderAdmin from "../../components/header/HeaderAdmin";
import axios from "axios";

export default function ContactAdmin() {
  // gửi mail
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);

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

  const handleDeleteContact = async (contactID) => {
    await axios
      .delete(`https://gis-historical-relic.onrender.com/api/damageReport/delete/${contactID}`)
      .then(() => {})
      .catch((err) => console.error(err));
    setOpenDelete(false);
  };

  React.useEffect(() => {
    axios
      .get("https://gis-historical-relic.onrender.com/api/damageReport")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDelete]);

  return (
    <>
      <HeaderAdmin />
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
            {data ? (
              data.map((datum, i) => {
                const name =
                  datum["userID"] != undefined ? datum["userID"]["name"] : "";
                const email =
                  datum["userID"] != undefined ? datum["userID"]["email"] : "";
                const contactID = datum["_id"];
                return (
                  <div key={i}>
                    <div className="contact-admin-table-content-row">
                      <p className="contact-admin-table-col1">{i + 1}</p>
                      <p className="contact-admin-table-col2">{name}</p>
                      <p className="contact-admin-table-col2">
                        {datum["cause"]}
                      </p>
                      <p className="contact-admin-table-col3">
                        {datum["content"]}
                      </p>
                      <div className="contact-admin-table-col">
                        <button
                          className="contact-btn-send"
                          onClick={handleClickOpen}
                        >
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
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        Bạn có muốn gửi mail cảm ơn đến {name}?
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Khi bạn chọn gửi thì hệ thống sẽ gửi một mail đến
                          người dùng {name}. Để cảm ơn góp ý của họ đối với
                          trang web và dự án của chúng ta
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Hủy</Button>
                        <Button onClick={handleClose} autoFocus>
                          <a href={`mailto:${email}`}>Gửi</a>
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
                        Bạn có muốn xóa phản hồi {name}?
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Khi bạn chọn xóa thì hệ thống sẽ phản hồi của {name} này ra khỏi hệ thống.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleCloseDelete}>Hủy</Button>
                        <Button
                          onClick={() => handleDeleteContact(contactID)}
                          autoFocus
                        >
                          Xóa
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
          {/* lấy id của ng hiện và xủa lý xóa */}
        </div>
      </div>
    </>
  );
}
