import Container from "../Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Flex from "../Flex";

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
        </Container>
    </div>
  )
}

export default Cart