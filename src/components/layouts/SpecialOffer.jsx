import Container from "../Container";
import Product from "../Product";
import specialOne from "/src/assets/specialOne.png";
import specialTwo from "/src/assets/specialTwo.png";
import specialThree from "/src/assets/specialThree.png";
import specialFour from "/src/assets/specialFour.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const SpecialOffer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <>
      <Container>
        <h2 className="text-[24px] font-DM font-bold pb-10 lg:pb-[55px] lg:text-[39px] px-4 md:px-0">
          Special Offers
        </h2>
        <div className="mx-0 md:-mx-4 px-2 md:px-0 overflow-hidden">
          <Slider {...settings}>
            <div className="px-1.5 md:px-4">
              <Product
                productImg={specialOne}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div className="px-1.5 md:px-4">
              <Product
                productImg={specialTwo}
                badgeText={"40%"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div className="px-1.5 md:px-4">
              <Product
                productImg={specialThree}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div className="px-1.5 md:px-4">
              <Product
                productImg={specialFour}
                badgeText={"10%"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div className="px-1.5 md:px-4">
              <Product
                productImg={specialOne}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div className="px-1.5 md:px-4">
              <Product
                productImg={specialThree}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default SpecialOffer;