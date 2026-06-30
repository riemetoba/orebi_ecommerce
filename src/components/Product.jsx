import Badge from "./Badge";
import Flex from "./Flex";
import Image from "./Image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";

const Product = ({ productImg, badgeText, productTitle, productPrice }) => {
  return (
    <div className="group mx-1.5 md:mx-3">
      <div className="relative bg-[#f3f3f3] mt-5 overflow-hidden">
        <Image src={productImg} className="w-full h-auto object-cover" />
        <Badge
          badgeText={badgeText}
          className="absolute top-3 left-3 sm:top-5 sm:left-5 text-[10px] sm:text-sm px-2 sm:px-4 py-0.5 sm:py-1"
        />
        <div className="bg-[#ffffff] p-3 sm:p-6 opacity-0 group-hover:opacity-100 transition duration-300 bottom-0 left-0 absolute w-full hidden sm:block">
          <Flex className="justify-end gap-x-3 items-center mb-1 sm:mb-2">
            <h3 className="font-DM text-xs sm:text-base text-[#767676]">
              Add to Wish List
            </h3>
            <FaHeart className="text-xs sm:text-sm" />
          </Flex>
          <Flex className="justify-end gap-x-3 items-center mb-1 sm:mb-2">
            <h3 className="font-DM text-xs sm:text-base text-[#767676]">
              Compare
            </h3>
            <HiOutlineRefresh className="text-xs sm:text-sm" />
          </Flex>
          <Flex className="justify-end gap-x-3 items-center">
            <h3 className="font-DM text-xs sm:text-base font-bold">
              Add to Cart
            </h3>
            <FaShoppingCart className="text-xs sm:text-sm" />
          </Flex>
        </div>
      </div>
      <Flex className="justify-between items-start pt-3 gap-x-2">
        <h3 className="font-DM text-sm sm:text-base md:text-[20px] font-bold text-deepBlack line-clamp-1">
          {productTitle}
        </h3>
        <h3 className="font-DM text-xs sm:text-sm md:text-base text-[#767676] whitespace-nowrap">
          {productPrice}
        </h3>
      </Flex>
    </div>
  );
};

export default Product;
