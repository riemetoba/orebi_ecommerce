import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logoFoooter from "/src/assets/logoFoooter.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] py-9 sm:py-[50px] mt-[60px] md:mt-[100px]">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-y-8 md:gap-y-0 gap-x-2 sm:gap-x-7 px-4 md:px-0">
          <div className="w-full md:w-[40%]">
            <Flex className="gap-x-4 sm:gap-x-10 justify-between items-start">
              <div className="">
                <h4 className="font-DM font-bold text-[12px] sm:text-base">MENU</h4>
                <ul>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/shop"}>Shop</Link>
                  </li>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/"}>Journal</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="font-DM font-bold text-[12px] sm:text-base">SHOP</h4>
                <ul>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/"}>Category 1</Link>
                  </li>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/shop"}>Category 2</Link>
                  </li>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/about"}>Category 3</Link>
                  </li>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/contact"}>Category 4</Link>
                  </li>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/"}>Category 5</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="font-DM font-bold text-[12px] sm:text-base">HELP</h4>
                <ul>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/"}>Privacy Policy</Link>
                  </li>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/shop"}>Terms & Conditions</Link>
                  </li>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/about"}>Special E-shop</Link>
                  </li>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/contact"}>Shipping</Link>
                  </li>
                  <li className="text-[10px] sm:text-sm font-DM text-halkaGray mt-2 sm:mt-4">
                    <Link to={"/"}>Secure Payments</Link>
                  </li>
                </ul>
              </div>
            </Flex>
          </div>
          <div className="w-full md:w-[30%] mb-4 md:mb-28">
            <h4 className="text-[12px] font-DM font-bold sm:text-sm lg:text-base">(052) 611-5711</h4>
            <h4 className="text-[12px] font-DM font-bold sm:text-sm lg:text-base">company@domain.com</h4>
            <p className="font-DM text-[11px] lg:text-sm text-halkaGray mt-2 md:mt-5">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>
          <div className="w-24 sm:w-28 md:w-[30%] flex md:justify-end">
            <Image src={logoFoooter} className="mb-6 md:mb-[150px]" />
          </div>
        </div>
        <Flex className="flex-col-reverse sm:flex-row gap-y-4 sm:gap-y-0 gap-x-4 sm:gap-x-20 justify-between items-center md:items-start px-4 md:px-0">
          <div className="flex gap-x-4 mt-6 sm:mt-12">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaLinkedin />
            </div>
            <div>
              <FaInstagram />
            </div>
          </div>
          <div className="mt-6 sm:mt-12 text-center sm:text-right">
            <p className="font-DM text-[10px] sm:text-sm text-halkaGray">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;