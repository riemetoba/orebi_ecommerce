import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import cartImage from "../../assets/cartImage.png";
import { Link } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "../Button";

const Header = () => {
  const [show, setShow] = useState(false);
  const [userShow, setUserShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  return (
    <>
      {/* // Logo and Navigation part start */}
      <div className="py-8">
        <Container>
          <Flex>
            <div className="lg:w-[40%]">
              <Link to={"/"}>
                <Image src={logo} />
              </Link>
            </div>
            <div className="lg:w-[60%] mx-auto">
              <ul className="flex gap-x-9">
                <li className="font-DM text-[#767676] text-base hover:text-black hover:font-extrabold duration-300">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="font-DM text-[#767676] text-base hover:text-black hover:font-extrabold duration-300">
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li className="font-DM text-[#767676] text-base hover:text-black hover:font-extrabold duration-300">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="font-DM text-[#767676] text-base hover:text-black hover:font-extrabold duration-300">
                  <Link to={"/contact"}>Contacts</Link>
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      {/* // Logo and Navigation part End */}
      {/* // Search and Cart Part Start */}
      <div className="py-6 bg-[#F5F5F3] border-light-gray border">
        <Container>
          <Flex className={"justify-between"}>
            <div className="border-light-gray border relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setShow(!show)}
              >
                <HiBars2 className="font-extrabold text-[24px] mr-2.5" />
                Shop by Category
              </div>
              {/* Drop down  */}
              {show && (
                <div className="bg-deepBlack w-[265px] absolute left-0 top-12">
                  <ul>
                    <li className="text-[#B6B6B6] text-sm font-DM hover:text-white hover:font-bold border-b border-b-[#D8D8D8] py-4 px-5">
                      <Link to={"/"}>Accesories</Link>
                    </li>
                    <li className="text-[#B6B6B6] text-sm font-DM hover:text-white hover:font-bold border-b border-b-[#D8D8D8] py-4 px-5">
                      <Link to={"/"}>Furniture</Link>
                    </li>
                    <li className="text-[#B6B6B6] text-sm font-DM hover:text-white hover:font-bold border-b border-b-[#D8D8D8] py-4 px-5">
                      <Link to={"/"}>Electronics</Link>
                    </li>
                    <li className="text-[#B6B6B6] text-sm font-DM hover:text-white hover:font-bold border-b border-b-[#D8D8D8] py-4 px-5">
                      <Link to={"/"}>Clothes</Link>
                    </li>
                    <li className="text-[#B6B6B6] text-sm font-DM hover:text-white hover:font-bold border-b border-b-[#D8D8D8] py-4 px-5">
                      <Link to={"/"}>Bags</Link>
                    </li>
                    <li className="text-[#B6B6B6] text-sm font-DM hover:text-white hover:font-bold border-b border-b-[#D8D8D8] py-4 px-5">
                      <Link to={"/"}>Home appliances</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Drop down  */}
            {/* User Dropdown  */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search Product"
                className="bg-white lg:w-[500px] w-[100px] h-[45px] pl-5 border-light-gray border"
              />
              <div className="absolute top-1/3 right-4">
                <IoMdSearch />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div
                className="flex items-center gap-x-2 relative cursor-pointer"
                onClick={() => setUserShow(!userShow)}
              >
                <IoPersonSharp />
                <BiSolidDownArrow className="text-[10px]" />
                {userShow && (
                  <div className="bg-amber-700 w-[200px] absolute right-0 top-6">
                    <ul>
                      <li className="font-DM text-sm font-bold text-[#ffffff] border-b-2 border-b-[#2B2B2B] bg-deepBlack text-center py-4 hover:bg-[#ffffff] hover:text-deepBlack duration-300 cursor-pointer">
                        <Link to={"/"}>My Account</Link>
                      </li>
                      <li className="font-DM text-sm font-bold text-[#ffffff] bg-deepBlack text-center py-4 hover:bg-[#ffffff] hover:text-deepBlack duration-300 cursor-pointer">
                        <Link to={"/"}>Log Out</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* User Dropdown  */}
              {/* Cart and Dropdown  */}
              <div className="relative" onClick={() => setCartShow(!cartShow)}>
                <FaShoppingCart className="cursor-pointer"/>
                {cartShow && (
                  <div className="w-[360px] h-[260px] absolute right-0 top-6">
                    <div className="bg-[#F5F5F3] py-5 px-4">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-x-5 items-center">
                          <Image src={cartImage} />
                          <div className="font-DM font-bold text-sm">
                            <h5>Black Smart Watch</h5>
                            <h5 className="pt-3">$44.00</h5>
                          </div>
                        </div>
                        <div className="cursor-pointer">
                          <RxCross2 />
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#ffffff] py-3 px-4">
                      <div className="flex items-center">
                        <h5 className="text-[#767676] font-DM text-base">
                          Subtotal:
                        </h5>
                        <h5 className="font-DM text-base mx-1"> $44.00</h5>
                      </div>
                      <div className="flex items-center justify-between">
                        <Button btnText={"View Cart"} />
                        <Button btnText={"Checkout"} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Cart and Dropdown  */}
            </div>
          </Flex>
        </Container>
      </div>
      {/* // Search and Cart Part End */}
    </>
  );
};

export default Header;
