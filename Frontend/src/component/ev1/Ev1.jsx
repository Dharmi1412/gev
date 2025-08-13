import Carousel from "react-bootstrap/Carousel";
import { assets } from "../../../assets/assets";

function Ev1() {
  const images = [
    // "https://quickinsure.s3.ap-south-1.amazonaws.com/uploads/static_page/c9764b9e-5f31-46a9-b662-66f1e5431e87/Ather-Electric-Two-Wheeler-Insurance-min.png",
    // "https://tradebrains.in/wp-content/uploads/2021/12/Electric-Vehicle-Cover-image.jpg",
    // "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/honda-activa-e-standard1732724252825.jpg?q=80",
    assets.ev1,
    assets.ev2,
    assets.ev1,
  ];

  return (
    <Carousel>
      {images.map((url, i) => (
        <Carousel.Item key={i} interval={1000}>
          <img className="slider-img" src={url} alt={`slide-${i}`} />
          {/* <Carousel.Caption>Caption here if needed</Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Ev1;
