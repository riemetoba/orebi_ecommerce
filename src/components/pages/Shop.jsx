import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import Image from "../Image";
import gridOne from "../../assets/gridOne.png"
import gridTwo from "../../assets/gridTwo.png"


const Shop = () => {
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
          <div className="w-1/4">
            <h5 className="font-DM font-bold text-[20px] text-deepBlack py-10">
              Shop by Category
            </h5>
            <div className="">
              <ul>
                <div className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>Category 1</Link>
                  </li>
                  <FiPlus />
                </div>
                <div className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>Category 2</Link>
                  </li>
                  <FiPlus />
                </div>
                <div className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>Category 3</Link>
                  </li>
                  <FiPlus />
                </div>
                <div className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>Category 4</Link>
                  </li>
                  <FiPlus />
                </div>
                <div className="flex items-center justify-between font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>Category 5</Link>
                  </li>
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
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>Brand 1</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>Brand 2</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>Brand 3</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>Brand 4</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>Brand 5</Link>
                  </li>
                </div>
              </ul>
            </div>
            {/* Shop by Brand part  */}
            {/* Shop by Price part  */}
            <h5 className="font-DM font-bold text-[20px] text-deepBlack py-10">
              Shop by Price
            </h5>
            <div className="">
              <ul>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>$0.00 - $9.99</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>$10.00 - $19.99</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>$20.00 - $29.99</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>$30.00 - $39.99</Link>
                  </li>
                </div>
                <div className="flex gap-x-4 items-center font-DM text-base text-[#767676] border-b border-b-[#D8D8D8] py-5">
                  <li className="">
                    <Link to={"/"}>$40.00 - $69.99</Link>
                  </li>
                </div>
              </ul>
            </div>
            {/* Shop by Price part  */}
          </div>
          {/* Flex left end  */}
          {/* Flex right start  */}
          <div className="w-1/2">
            <div className="flex items-center">
              <Image src={gridOne}/>
              <Image src={gridTwo}/>
            </div>
          </div>
          {/* Flex right end  */}
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
