import Container from "../Container";
import Product from "../Product";
import newArrivalsOne from "/src/assets/newArrivalsOne.png";
import newArrivalsTwo from "/src/assets/newArrivalsTwo.png";
import newArrivalsThree from "/src/assets/newArrivalsThree.png";
import newArrivalsFour from "/src/assets/newArrivalsFour.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import { useEffect, useState } from "react";
import axios from "axios";

const NewArrival = () => {
  const [allData, setAllData] = useState([]);
  
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  }, []);

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
          New Arrivals
        </h2>
        <div className="mx-0 md:-mx-4 px-2 md:px-0 w-full overflow-hidden">
          <Slider {...settings}>
            {allData.map((item) => (
              <div key={item.id} className="px-1.5 md:px-4 w-full">
                <Product
                  productImg={item.thumbnail}
                  badgeText={item.rating}
                  productTitle={item.title}
                  productPrice={item.price}
                />
              </div>
            ))}

            <div className="px-1.5 md:px-4 w-full">
              <Product
                productImg={newArrivalsTwo}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div className="px-1.5 md:px-4 w-full">
              <Product
                productImg={newArrivalsThree}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div className="px-1.5 md:px-4 w-full">
              <Product
                productImg={newArrivalsFour}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div className="px-1.5 md:px-4 w-full">
              <Product
                productImg={newArrivalsOne}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div className="px-1.5 md:px-4 w-full">
              <Product
                productImg={newArrivalsTwo}
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

export default NewArrival;