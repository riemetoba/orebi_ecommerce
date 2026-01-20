import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import Product from "../Product";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import mixitup from "mixitup";

const Shop = () => {
  const containerRef = useRef(null);
  let [allData, setAllData] = useState([]);
  // API 
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  }, []);
  // API 
  // Mixitup
   useEffect(() => {
        if (containerRef.current && allData.length > 0) {
            mixitup(containerRef.current, {
                animation: {
                    duration: 400,
                }
            });
        }
    },);
  // Mixitup
  return (
    <div>
      <Container>
        <h3 className="pt-40 font-DM text-5xl font-bold text-deepBlack">
          Products
        </h3>
        <div className="flex items-center gap-x-4 pt-8 text-[12px] font-DM text-[#767676]">
          <div className="flex items-center gap-4">
            <h6>Home</h6>
            <MdKeyboardArrowRight className="pt-0.5" />
          </div>
          <div className="">Products</div>
        </div>
        <Flex className={"pt-15 items-start gap-x-6"}>
          {/* Flex left start  */}

          {/* Shop by Category part  */}
          <div className="w-[25%]">
            <h5 className="font-DM font-bold text-[20px] text-deepBlack py-10">
              Shop by Category
            </h5>
              <div className="">
                <ul>
                    <div data-filter=".categoryOne" className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                        <p>Category 1</p>
                        <FiPlus />
                    </div>
                    <div data-filter=".categoryTwo" className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                        <p>Category 2</p>
                        <FiPlus />
                    </div>
                    <div data-filter=".categoryThree" className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                        <p>Category 3</p>
                        <FiPlus />
                    </div>
                    <div data-filter=".categoryFour" className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                        <p>Category 4</p>
                        <FiPlus />
                    </div>
                    <div data-filter=".categoryFive" className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                        <p>Category 5</p>
                        <FiPlus />
                    </div>
                </ul>
            </div>

            {/* Shop by Category part  */}
            {/* Shop by color part  */}
            <h5 className="font-DM font-bold text-[20px] text-deepBlack py-10">
              Shop by Color
            </h5>
            <div className="">
              <ul>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <FaCircle className="text-[#000000] text-sm" />
                  <li className="">
                    <Link to={"/"}>Color 1</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <FaCircle className="text-[#FF8686] text-sm" />
                  <li className="">
                    <Link to={"/"}>Color 1</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <FaCircle className="text-[#7ED321] text-sm" />
                  <li className="">
                    <Link to={"/"}>Color 1</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <FaCircle className="text-[#B6B6B6] text-sm" />
                  <li className="">
                    <Link to={"/"}>Color 1</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <FaCircle className="text-[#15CBA5] text-sm" />
                  <li className="">
                    <Link to={"/"}>Color 1</Link>
                  </li>
                </div>
              </ul>
            </div>
            {/* Shop by color part  */}
            {/* Shop by Brand part  */}
            <h5 className="font-DM font-bold text-[20px] text-deepBlack py-10">
              Shop by Brand
            </h5>
            <div className="">
              <ul>
                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <Link to={"/"}>Brand 1</Link>
                </li>

                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <Link to={"/"}>Brand 2</Link>
                </li>

                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <Link to={"/"}>Brand 3</Link>
                </li>

                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <Link to={"/"}>Brand 4</Link>
                </li>

                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <Link to={"/"}>Brand 5</Link>
                </li>
              </ul>
            </div>
            {/* Shop by Brand part  */}
            {/* Shop by Price part  */}
            <h5 className="font-DM font-bold text-[20px] text-deepBlack py-10">
              Shop by Price
            </h5>
            <div className="">
              <ul>
                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <Link to={"/"}>$0.00 - $9.99</Link>
                </li>

                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <Link to={"/"}>$10.00 - $19.99</Link>
                </li>

                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <Link to={"/"}>$20.00 - $29.99</Link>
                </li>

                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <Link to={"/"}>$30.00 - $39.99</Link>
                </li>

                <li className="font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <Link to={"/"}>$40.00 - $69.99</Link>
                </li>
              </ul>
            </div>
            {/* Shop by Price part  */}
          </div>
          {/* Flex left end  */}
          {/* Flex right start  */}
          <div className="w-[75%] py-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-x-6">
                <IoGridSharp className="text-3xl hover:text" />
                <AiOutlineBars className="text-3xl" />
              </div>

              <div className="flex items-center text-end gap-x-2 font-DM text-base text-[#767676] relative">
                <h6>Sort by:</h6>
                <input
                  className="border border-[#767676] px-3 py-2 w-[239px]"
                  type="text"
                  placeholder="Featured"
                />
                <BiSolidDownArrow className="absolute top-3.5 right-3 text-sm" />
              </div>
              <div className="flex items-center gap-x-2 font-DM text-base text-[#767676] relative">
                <h6>Show:</h6>
                <input
                  className="border border-[#767676] px-3 py-2 w-[239px]"
                  type="text"
                  placeholder="36"
                />
                <BiSolidDownArrow className="absolute top-3.5 right-3 text-sm" />
              </div>
            </div>
            <div className="" ref={containerRef}>
              <div className="grid grid-cols-3 gap-5">
                {allData.slice(0, 9).map((item) => (
                  <div className="mix categoryOne">
                    <Product
                      productImg={item.thumbnail}
                      badgeText={item.rating}
                      productTitle={item.title}
                      productPrice={item.price}
                    />
                  </div>
                ))}
                {allData.slice(10, 20).map((item) => (
                  <div className="mix categoryTwo">
                    <Product
                      productImg={item.thumbnail}
                      badgeText={item.rating}
                      productTitle={item.title}
                      productPrice={item.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Flex right end  */}
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
