import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Flex from "../Flex";
import Image from "../Image";
import cartSunglass from "../../assets/cartSunglass.png";
import { RxCross2 } from "react-icons/rx";
import Counter from "../layouts/Counter";
import Button from "../Button";

const Cart = () => {
  return (
    <div>
        <Container>
            <h3 className="pt-40 font-DM text-5xl font-bold text-deepBlack">
          Cart
        </h3>
        <div className="flex items-center gap-x-4 pt-8 text-[12px] font-DM text-[#767676] pb-25">
          <div className="flex items-center gap-4">
            <h6>Home</h6>
            <MdKeyboardArrowRight className="pt-0.5" />
          </div>
          <div className="">Cart</div>
        </div>
          <Flex className={"bg-[#F5F5F3] py-5 grid grid-cols-4 px-4"}>
            <h4 className="text-base font-DM text-deepBlack">Product</h4>
            <h4 className="text-base font-DM text-deepBlack">Price</h4>
            <h4 className="text-base font-DM text-deepBlack">Quantity</h4>
            <h4 className="text-base font-DM text-deepBlack">Total</h4>
          </Flex>
          <div className="py-8 px-5 border border-[#F0F0F0]">
            <Flex className={"grid grid-cols-4"}>
                <div className="flex items-center gap-4">
                    <RxCross2 />
                    <Image src={cartSunglass}/>
                    <p className="text-base font-DM text-deepBlack">Product name</p>
                </div>
                <p>$44.00</p>
                <div className="font-DM text-base border border-[#F0F0F0] py-2 px-2 w-[130px]">
                  <Counter/>
                </div>
                <p>$44.00</p>
            </Flex>
          </div>
          <div className="py-8 px-5 border border-[#F0F0F0]">
            <Flex className={"justify-between"}>
                <div className="flex gap-3 items-center">
                  <input className="py-1.5 px-2 border border-[#F0F0F0]" type="text" placeholder="SIZE"/>
                  <p>Apply coupon</p>
                </div>
                <p className="font-DM font-medium">Update cart</p>
            </Flex>
          </div>
          {/* title  */}
           <p className="text-right text-[20px] font-DM font-medium py-5">Cart totals</p>
           {/* 1st flex  */}
          <div className="flex items-center justify-end">
            <div className="w-[322px] px-3 py-4 border border-[#F0F0F0]">
           <p className="text-deepBlack font-DM text-base">Subtotal</p>
          </div>
            <div className="w-[322px] px-3 py-4 border-t border-r border-b border-[#F0F0F0]">
           <p className="text-deepBlack font-DM text-base">389.99 $</p>
          </div>
          </div>
          {/* 2nd flex  */}
          <div className="flex items-center justify-end">
            <div className="w-[322px] px-3 py-4 border-l border-r border-b border-[#F0F0F0]">
           <p className="text-deepBlack font-DM text-base">Subtotal</p>
          </div>
            <div className="w-[322px] px-3 py-4 border-r border-b border-[#F0F0F0]">
           <p className="text-deepBlack font-DM text-base">389.99 $</p>
          </div>
          </div>
          {/* 2nd flex  */}
          {/* button  */}
          <div className="text-right mt-9 font-DM">
            <Button btnText={"Proceed to Checkout"}/>
          </div>
        </Container>
    </div>
  )
}

export default Cart