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
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Button from "../Button";

const Header = () => {
  const [show, setShow] = useState(false);
  const [userShow, setUserShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ── Logo and Navigation part start ── */}
      <div className="py-6 md:py-8">
        <Container>
          <Flex className="items-center justify-between">
            {/* Logo */}
            <div className="w-[40%] sm:w-[30%] ml-1 sm:ml-5">
              <Link to={"/"}>
                <Image src={logo} />
              </Link>
            </div>

            <div className="hidden md:block w-[70%]">
              <ul className="flex items-center gap-x-6 lg:gap-x-9">
                <li className="font-DM text-[#767676] text-sm sm:text-base hover:text-black hover:font-extrabold duration-300">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="font-DM text-[#767676] text-sm sm:text-base hover:text-black hover:font-extrabold duration-300">
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li className="font-DM text-[#767676] text-sm sm:text-base hover:text-black hover:font-extrabold duration-300">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="font-DM text-[#767676] text-sm sm:text-base hover:text-black hover:font-extrabold duration-300">
                  <Link to={"/contact"}>Contacts</Link>
                </li>
              </ul>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="flex md:hidden ml-auto items-center pr-2">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-[28px] text-[#2B2B2B] focus:outline-none"
                aria-label="Open menu"
              >
                <HiOutlineMenuAlt3 />
              </button>
            </div>
          </Flex>
        </Container>
      </div>
      {/* ── Logo and Navigation part End ── */}

      {/* ── Search and Cart Part (Desktop) ── */}
      <div className="hidden md:block py-6 bg-[#F5F5F3] border-light-gray border">
        <Container>
          <Flex
            className={"gap-x-5 sm:gap-x-15 md:gap-x-30 lg:justify-between"}
          >
            <div className="relative">
              <div
                className="flex items-center text-sm lg:text-base cursor-pointer select-none"
                onClick={() => setShow(!show)}
              >
                <HiBars2 className="font-extrabold text-[24px] mr-2.5" />
                Shop by Category
              </div>
              {show && (
                <div className="bg-deepBlack w-[265px] absolute left-0 top-12 z-50">
                  <ul>
                    <li className="text-[#B6B6B6] text-sm font-DM hover:text-white hover:font-bold border-b border-b-[#D8D8D8] py-4 px-5">
                      <Link to={"/"} onClick={() => setShow(false)}>
                        Accesories
                      </Link>
                    </li>
                    <li className="text-[#B6B6B6] text-sm font-DM hover:text-white hover:font-bold border-b border-b-[#D8D8D8] py-4 px-5">
                      <Link to={"/"} onClick={() => setShow(false)}>
                        Furniture
                      </Link>
                    </li>
                    <li className="text-[#B6B6B6] text-sm font-DM hover:text-white hover:font-bold border-b border-b-[#D8D8D8] py-4 px-5">
                      <Link to={"/"} onClick={() => setShow(false)}>
                        Electronics
                      </Link>
                    </li>
                    <li className="text-[#B6B6B6] text-sm font-DM hover:text-white hover:font-bold border-b border-b-[#D8D8D8] py-4 px-5">
                      <Link to={"/"} onClick={() => setShow(false)}>
                        Clothes
                      </Link>
                    </li>
                    <li className="text-[#B6B6B6] text-sm font-DM hover:text-white hover:font-bold border-b border-b-[#D8D8D8] py-4 px-5">
                      <Link to={"/"} onClick={() => setShow(false)}>
                        Bags
                      </Link>
                    </li>
                    <li className="text-[#B6B6B6] text-sm font-DM hover:text-white hover:font-bold border-b border-b-[#D8D8D8] py-4 px-5">
                      <Link to={"/"} onClick={() => setShow(false)}>
                        Home appliances
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search Product"
                className="bg-white text-base lg:w-[500px] w-[200px] h-[45px] pl-5 border-light-gray border"
              />
              <div className="text-[#2B2B2B] absolute top-1/3 right-4">
                <IoMdSearch />
              </div>
            </div>

            <div className="flex items-center gap-x-10">
              <div
                className="flex items-center gap-x-2 relative cursor-pointer"
                onClick={() => setUserShow(!userShow)}
              >
                <IoPersonSharp />
                <BiSolidDownArrow className="text-[10px]" />
                {userShow && (
                  <div className="w-[200px] absolute right-0 top-6 z-50">
                    <ul>
                      <li className="font-DM text-sm font-bold text-[#ffffff] border-b-2 border-b-[#2B2B2B] bg-deepBlack text-center py-4 hover:bg-[#ffffff] hover:text-deepBlack duration-300 cursor-pointer">
                        <Link to={"/"} onClick={() => setUserShow(false)}>
                          My Account
                        </Link>
                      </li>
                      <li className="font-DM text-sm font-bold text-[#ffffff] bg-deepBlack text-center py-4 hover:bg-[#ffffff] hover:text-deepBlack duration-300 cursor-pointer">
                        <Link to={"/"} onClick={() => setUserShow(false)}>
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative" onClick={() => setCartShow(!cartShow)}>
                <FaShoppingCart className="cursor-pointer" />
                {cartShow && (
                  <div
                    className="w-[360px] h-[260px] absolute right-0 top-6 z-50 bg-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="bg-[#F5F5F3] py-5 px-4">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-x-5 items-center">
                          <Image src={cartImage} />
                          <div className="font-DM font-bold text-sm">
                            <h5>Black Smart Watch</h5>
                            <h5 className="pt-3">$44.00</h5>
                          </div>
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => setCartShow(false)}
                        >
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
                        <Link to={"/cart"} onClick={() => setCartShow(false)}>
                          <Button btnText={"View Cart"} />
                        </Link>
                        <Button btnText={"Checkout"} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* ── Search and Cart Part End ── */}

      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-60 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] z-50 bg-[#111111] flex flex-col transition-transform duration-300 ease-in-out md:hidden shadow-2xl ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#222222]">
          <div className="w-[50%] ml-1">
            <Link to={"/"}>
              <Image src={logo} />
            </Link>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl hover:scale-110 duration-200 focus:outline-none"
          >
            <RxCross2 />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="mb-6">
            <li>
              <Link
                to={"/"}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#cccccc] font-DM text-base py-3 px-3 rounded-md hover:bg-[#1e1e1e] hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/shop"}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#cccccc] font-DM text-base py-3 px-3 rounded-md hover:bg-[#1e1e1e] hover:text-white transition-colors"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#cccccc] font-DM text-base py-3 px-3 rounded-md hover:bg-[#1e1e1e] hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#cccccc] font-DM text-base py-3 px-3 rounded-md hover:bg-[#1e1e1e] hover:text-white transition-colors"
              >
                Contacts
              </Link>
            </li>
          </ul>

          {/* Mobile Search Input */}
          <div className="mb-6 px-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-[#1e1e1e] text-white text-sm h-[42px] pl-4 pr-10 rounded-md border border-[#333] focus:outline-none focus:border-[#555] placeholder-[#666]"
              />
              <div className="text-[#888] absolute top-1/2 -translate-y-1/2 right-3">
                <IoMdSearch className="text-[18px]" />
              </div>
            </div>
          </div>

          {/* "Shop by Category" Mobile Menu */}
          <div className="border-t border-[#222222] pt-4 px-3">
            <span className="text-[#666] text-xs font-bold uppercase tracking-wider block mb-3">
              Shop by Category
            </span>
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link
                  to={"/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#999999] hover:text-white text-[15px] py-1 transition-colors"
                >
                  Accesories
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#999999] hover:text-white text-[15px] py-1 transition-colors"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#999999] hover:text-white text-[15px] py-1 transition-colors"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#999999] hover:text-white text-[15px] py-1 transition-colors"
                >
                  Clothes
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#999999] hover:text-white text-[15px] py-1 transition-colors"
                >
                  Bags
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#999999] hover:text-white text-[15px] py-1 transition-colors"
                >
                  Home appliances
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="border-t border-[#222222] px-6 py-5 flex items-center justify-between bg-[#151515]">
          <Link
            to={"/"}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-x-2 text-[#cccccc] hover:text-white text-sm font-DM transition-colors"
          >
            <IoPersonSharp />
            <span>My Account</span>
          </Link>
          <Link
            to={"/cart"}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-x-2 text-[#cccccc] hover:text-white text-sm font-DM transition-colors"
          >
            <FaShoppingCart />
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
