import Header from "../../components/header";
import "./style.css"

export default function Modal3D() {
  console.log("modal3d")
  return (
    <>
      <Header/>
      <iframe src="https://arcgislab2-nhom1.netlify.app/?fbclid=IwAR1h9l76heg76QuSqvZLTBRXGp8CThQ5389LevX8t58lrYQbcJ9xdl_omRE" className="model3d_frame"/>
    </>
  )
}
