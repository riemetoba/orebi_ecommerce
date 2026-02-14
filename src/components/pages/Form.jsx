import { MdKeyboardArrowRight } from "react-icons/md";
import Container from "../Container";
import Button from "../Button";

const Form = () => {
  return (
    <div>
      <Container>
        <h3 className="pt-40 font-DM text-5xl font-bold text-deepBlack">
          Contacts
        </h3>
        <div className="flex items-center gap-x-4 pt-8 text-[12px] font-DM text-[#767676] pb-25">
          <div className="flex items-center gap-4">
            <h6>Home</h6>
            <MdKeyboardArrowRight className="pt-0.5" />
          </div>
          <div className="">Contacts</div>
        </div>
        <h2 className="font-DM text-3xl font-bold pb-14">Fill up a Form</h2>

        <p className="pb-2 font-DM font-bold text-base">Name</p>
        <div className="border-b border-[#F0F0F0] w-200">
          <input
            className="text-[#767676] font-DM outline-none"
            type="text"
            placeholder="Your name here"
          />
        </div>
        <p className="pb-2 font-DM font-bold text-base pt-4">Email</p>
        <div className="border-b border-[#F0F0F0] w-200">
          <input
            className="text-[#767676] font-DM outline-none"
            type="text"
            placeholder="Your email here"
          />
        </div>
        <p className="pb-2 font-DM font-bold text-base pt-4">Message</p>
        <div className="border-b border-[#F0F0F0] w-200">
          <input
            className="text-[#767676] pb-20 font-DM outline-none"
            type="text"
            placeholder="Your message here"
          />
        </div>
        <Button className={"mt-8"} btnText={"Post"}/>
      </Container>
    </div>
  );
};

export default Form;
