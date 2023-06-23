import Header from "../../components/header";
import "./style.css"

export default function Modal3D() {
  console.log("modal3d")
  return (
    <>
      <Header/>
      <iframe src="http://127.0.0.1:5502/NgoMon.html" className="model3d_frame"/>
    </>
  )
}
