import Badge from "./Badge";
import Flex from "./Flex";
import Image from "./Image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";

const Product = ({ productImg, badgeText, productTitle, productPrice }) => {
  return (
    <div className="group mx-3">
      <div className="relative bg-[#f3f3f3] mt-5">
        <Image src={productImg} />
        <Badge badgeText={badgeText} className={"absolute top-5 left-5"} />
        <div className="bg-[#ffffff] p-6 opacity-0 group-hover:opacity-100 transition duration-300 bottom-0 left-0 absolute w-full">
          <Flex className={"justify-end gap-x-3"}>
            <h3 className="font-DM text-base text-[#767676]">
              Add to Wish List
            </h3>
            <FaHeart />
          </Flex>
          <Flex className={"justify-end gap-x-3"}>
            <h3 className="font-DM text-base text-[#767676]">Compare</h3>
            <HiOutlineRefresh />
          </Flex>
          <Flex className={"justify-end gap-x-3"}>
            <h3 className="font-DM text-base font-bold">Add to Cart</h3>
            <FaShoppingCart />
          </Flex>
        </div>
      </div>
      <Flex className={"justify-between mt-4"}>
        <h3 className="font-DM text-[20px] font-bold text-deepBlack">{productTitle}</h3>
        <h3 className="font-DM text-base text-[#767676]">{productPrice}</h3>
      </Flex>
    </div>
  );
};

export default Product;
