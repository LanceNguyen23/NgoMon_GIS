import banner from "../../assets/img/NgoMon.png";
import NMC from "../../assets/img/NMC.png";
import NMD from "../../assets/img/NMD.png";
import NMD1 from "../../assets/img/NMD1.png";
import NMD2 from "../../assets/img/NM2.png";
import daiNM from "../../assets/img/daiNM.jpeg";
import lauNM from "../../assets/img/lauNM.jpg";
import "../home/Home.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Home() {
  console.log("Home");
  return (
    <>
      <Header />
      <div className="home-content">
        <div className="home-content-banner">
          <img className="home-img-banner" src={banner} alt="banner-home" />
        </div>
        <div className="home-content-intro">
          <h1 className="home-intro-title">Giới thiệu về Ngọ Môn</h1>
          <div className="home-intro-content">
            <img className="home-intro-content-img" src={NMC} />
            <div className="home-intro-content-description">
              <h2 className="home-intro-content-description-h2">
                Lịch sử Ngọ Môn
              </h2>
              <p className="home-intro-content-description-p">
                Ngọ Môn là di tích kiến trúc thời Nguyễn, cổng chính phía nam
                của Hoàng thành. Ngọ Môn được xây dựng năm Minh Mạng 14 (1833),
                khi triều Nguyễn tổ chức quy hoạch lại toàn bộ mặt bằng kiến
                trúc Hoàng thành. Nguyên tại vị trí này trước kia là Nam Khuyết
                Đài, xây dựng đầu thời Gia Long. Trên đài có điện Càn Nguyên,
                hai bên có hai cửa là Tả Đoan Môn và Hữu Đoan Môn.<br></br>Năm
                Minh Mạng 14 (1833), Nam Khuyết Đài bị giải thể hoàn toàn để lấy
                chỗ xây dựng Ngọ Môn. Trong bốn cổng của Hoàng thành, Ngọ Môn là
                chiếc cổng lớn nhất. Ngọ Môn có nghĩa là chiếc cổng xây mặt về
                hướng Ngọ; hướng này, theo quan niệm của địa lý phong thủy
                phương Đông là hướng Nam (nhưng cần hiểu là trên cả một trục
                rộng từ Đông Nam đến Tây Nam). Hướng của Ngọ Môn cũng như toàn
                bộ Kinh thành Huế trên thực tế là hướng càn - tốn (Tây Bắc -
                Đông Nam) nhưng vẫn được xem là hướng Ngọ - hướng Nam, hướng mà
                Dịch học quy định dành cho bậc vua Chúa để “nhi thính thiên hạ,
                hướng minh nhi trị” (hướng về lẽ sáng để cai trị thiên hạ).
              </p>
            </div>
          </div>
          <h1 className="home-intro-title">Phác thảo của Ngọ Môn</h1>
          <img className="home-img-design" src={NMD} />
          <div className="home-intro-content">
            <img className="home-img-design" src={NMD1} />
            <img className="home-img-design" src={NMD2} />
          </div>
          <h1 className="home-intro-title">Kiến trúc của Ngọ Môn</h1>
          <div className="home-intro-content">
            <div className="home-intro-content-description">
              <h2 className="home-intro-content-description-h2">Phần đài</h2>
              <p className="home-intro-content-description-p">
                Cổng có bình diện hình chữ U vuông góc, đáy dài 57,77m, cạnh bên
                dài 27,06m. Đài xây bằng gạch đá kết hợp với các thanh dầm chịu
                lực bằng đồng thau. Đài cao gần 5m, diện tích chiếm đất hơn
                1.560m2 (kể cả phần trong lòng chữ U). Thân đài trổ 5 lối đi.
                Lối chính giữa là Ngọ Môn, chỉ dành cho vua đi. Hai lối bên là
                Tả Giáp Môn và Hữu Giáp Môn, dành cho quan văn, võ theo cùng
                trong đoàn Ngự đạo. Hai lối đi bên ngoài cùng nằm ở hai cánh chữ
                U là Tả Dịch Môn và Hữu Dịch Môn, dành cho binh lính và voi ngựa
                theo hầu. Lối kiến trúc 5 cổng kiểu “ba cửa thẳng, hai cửa
                quanh” như vậy rất giống kiểu “minh tam ám ngũ” (nhìn rõ 3, thực
                ra trong lòng là 5) của Ngọ Môn ở Cố Cung Bắc Kinh.
              </p>
            </div>
            <img className="home-intro-content-img" src={daiNM} />
          </div>
          <div className="home-intro-content">
            <img className="home-intro-content-img" src={lauNM} />
            <div className="home-intro-content-description">
              <h2 className="home-intro-content-description-h2">
                Lầu Ngũ Phụng phía trên
              </h2>
              <p className="home-intro-content-description-p">
                Ngoài phần thân đài, lầu còn được tôn cao bởi một hệ thống nền
                cao 1,15m cũng chạy suốt thân dài hình chữ U. Lầu có hai tầng,
                kết cấu bộ khung hoàn toàn bằng gỗ lim với chẵn 100 cây cột. Mái
                tầng dưới nối liền nhau, chạy vòng quanh để che cho phần hồi
                lang. Mái tầng trên chia thành 9 bộ, với rất nhiều hình chim
                phụng trang trí ở phần bờ nóc, bờ quyết, khiến tòa lầu trông rất
                nhẹ nhàng, thanh thoát. Bộ mái chính giữa của lầu Ngũ Phụng lợp
                ngói ống màu vàng, tám bộ còn lại lợp ngói ống màu xanh<br></br>
                Kiến trúc của Ngọ Môn có dáng dấp tương tự Thiên An môn ở Cố
                cung Bắc Kinh nhưng vẫn thể hiện rõ phong cách kiến trúc dân
                tộc. Ngọ Môn của Huế trông nhẹ nhàng, duyên dáng và xưa nay vẫn
                được xem là một đỉnh cao của nghệ thuật kiến trúc cung đình Huế.
                Ngọ Môn cũng là nơi chứng kiến nhiều sự kiện lịch sử quan trọng.
                Nơi đây ngày xưa vẫn thường diễn ra các lễ lạc quan trọng nhất
                của triều Nguyễn như lễ Ban sóc (ban lịch mới), Truyền Lô (tuyên
                đọc tên tiến sĩ tân khoa)... Ngày 30 tháng 8 năm 1945, Ngọ Môn
                là nơi chứng giám lễ thoái vị của hoàng đế Bảo Đại, vị vua cuối
                cùng của chế độ quân chủ Việt Nam.<br></br>
                Với những giá trị kiến trúc lịch sử đặc biệt, Ngọ Môn cùng với
                hàng trăm di tích thuộc quần thể kiến trúc triều Nguyễn đã được
                Tổ chức Văn hoá, Giáo dục thế giới (UNESCO) công nhận là di sản
                văn hoá thế giới (1993).
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
