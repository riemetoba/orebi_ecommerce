import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import Container from "../Container";
import Flex from "../Flex";

const Information = () => {
  return (
    <div className="py-6 md:py-8 border-b border-[#F0F0F0]">
        <Container>
          <Flex className="flex-col md:flex-row items-start md:items-center justify-between gap-y-4 md:gap-y-0 px-4 sm:px-5 md:px-0">
            <div className="flex items-center">
              <PiNumberTwoBold className="mr-3 text-[24px] sm:text-[30px]" />
              <h2 className="text-sm sm:text-base font-DM text-halkaGray">
                Two years warranty
              </h2>
            </div>
            <div className="flex items-center">
              <FaTruck className="mr-3 text-[24px] sm:text-[30px]" />
              <h2 className="text-sm sm:text-base font-DM text-halkaGray">
                Free shipping
              </h2>
            </div>
            <div className="flex items-center">
              <FaArrowRotateLeft className="mr-3 text-[24px] sm:text-[30px]" />
              <h2 className="text-sm sm:text-base font-DM text-halkaGray">
                Return policy in 30 days
              </h2>
            </div>
          </Flex>
        </Container>
      </div>
  )
}

export default Information