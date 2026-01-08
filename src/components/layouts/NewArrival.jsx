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
//import "slick-carousel/slick/slick-theme.css";

const NewArrival = () => {
  // API anar jonno ekhan theke kaj shuru kora hoyeche
  let [allData, setAllData] = useState([]);
  useEffect(() => {     //ekhane useEffect use kora hoyeche side effect reduce korar jonno. 
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");      // etar side effect reduce korar jonnoi useEffect k use kora hoyeche
      setAllData(data.data.products);
    }
    alldatas();
    // API anar jonno function er kaj ekhane shes holo
  }); 
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
        <h2 className="text-[24px] font-DM font-bold pb-10 lg:pb-[55px] lg:text-[39px]">
          New Arrivals
        </h2>
        <div className="-mx-4">
          <Slider {...settings}>
            {allData.map((item) => (
              <div>
                <Product
                  productImg={item.thumbnail}
                  badgeText={item.rating}
                  productTitle={item.title}
                  productPrice={item.price}
                />
              </div>
            ))}

            <div>
              <Product
                productImg={newArrivalsTwo}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div>
              <Product
                productImg={newArrivalsThree}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div>
              <Product
                productImg={newArrivalsFour}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div>
              <Product
                productImg={newArrivalsOne}
                badgeText={"New"}
                productTitle={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
            <div>
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
