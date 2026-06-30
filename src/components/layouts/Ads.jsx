import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import adsOne from "../../assets/adsOne.png"
import adsTwo from "../../assets/adsTwo.png"
import adsThree from "../../assets/adsThree.png"
import { Link, } from "react-router-dom"


const Ads = () => {
  return (
    <div className="py-10 md:py-30">
         <Container>
            <Flex className="lg:justify-between flex-wrap lg:flex-nowrap gap-x-[30px]">
              {/* ========= */}
                <Link to={"/shop"}>
                <div className="max-w-[780px] mx-auto">
                    <Image src={adsOne}/>
                </div>
                </Link>
                {/* ========= */}
                <div className="max-w-[780px] mx-auto flex flex-col gap-y-7">
                    <Link to={"/shop"}>
                    <Image src={adsTwo} className={"mt-7 lg:mt-0"}/>
                    </Link>
                    <Link to={"/shop"}>
                    <Image src={adsThree}/>
                    </Link>
                </div>
            </Flex>
         </Container>
    </div>
  )
}

export default Ads