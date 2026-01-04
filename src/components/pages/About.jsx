import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import aboutGhori from "/src/assets/aboutGhori.png";
import aboutJhuri from "/src/assets/aboutJhuri.png";
import Flex from "../Flex";
import Image from "../Image";
import Button from "../Button";


const About = () => {
  return (
    <div>
      <Container>
        <h3 className="pt-40 font-DM text-5xl font-bold text-deepBlack">
          About
        </h3>
        <div className="flex items-center gap-x-4 pt-8 text-[12px] font-DM text-[#767676]">
          <div className="flex items-center gap-4">
            <h6>Home</h6>
            <MdKeyboardArrowRight className="pt-0.5" />
          </div>
          <div className="">About</div>
        </div>
        <Flex className={"mt-20 gap-x-6 justify-between"}>
          <div className="relative">
            <Image src={aboutGhori}/>
            <Button className={"absolute bottom-18 left-[50%] -translate-x-[50%]"} btnText={"Our Brands"}/>
          </div>
          <div className="relative">
            <Image src={aboutJhuri}/>
            <Button className={"absolute bottom-18 left-[50%] -translate-x-[50%]"} btnText={"Our Stores"}/>
          </div>
        </Flex>
        <h4 className="text-[34px] leading-[52px] font-DM py-[100px]">Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h4>
        <div className="flex items-start justify-between mt-20 gap-x-2">
          <div className="">
            <h6 className="text-[34px] font-DM font-bold">Our Vision</h6>
            <p className="text-base font-DM w-[450px] text-[#767676] leading-[29px] py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="">
            <h6 className="text-[34px] font-DM font-bold">Our Story</h6>
            <p className="text-base font-DM w-[450px] text-[#767676] leading-[29px] py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
          </div>
          <div className="">
            <h6 className="text-[34px] font-DM font-bold">Our Brands</h6>
            <p className="text-base font-DM w-[450px] text-[#767676] leading-[29px] py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
