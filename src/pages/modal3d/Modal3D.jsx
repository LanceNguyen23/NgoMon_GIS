import Header from "../../components/header";
import "./style.css"

export default function Modal3D() {
  console.log("modal3d")
  return (
    <>
      <Header/>
      <iframe src="https://nld.com.vn/" className="model3d_frame"/>
    </>
  )
}
