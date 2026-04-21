import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import bestSellersOne from "/src/assets/bestSellersOne.png";
import bestSellersTwo from "/src/assets/bestSellersTwo.png";
import bestSellersThree from "/src/assets/bestSellersThree.png";
import bestSellersFour from "/src/assets/bestSellersFour.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
const Bestsellers = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Container>
        <h2 className="text-[24px] font-DM font-bold pb-10 lg:pb-[55px] lg:text-[39px] pt-25">
          Our Bestsellers
        </h2>
        {/* ========= */}
        <div className="-mx-4">
          <Slider {...settings}>
            {/* ======== */}
            <div>
              <Product
                productImg={bestSellersOne}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
             {/* ======== */}
            <div>
              <Product
                productImg={bestSellersTwo}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
             {/* ======== */}
            <div>
              <Product
                productImg={bestSellersThree}
                badgeText={"70%"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
             {/* ======== */}
            <div>
              <Product
                productImg={bestSellersFour}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
             {/* ======== */}
            <div>
              <Product
                productImg={bestSellersTwo}
                badgeText={"20%"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
             {/* ======== */}
            <div>
              <Product
                productImg={bestSellersThree}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
             {/* ======== */}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Bestsellers;
