import { Link } from "react-router-dom";
import Container from "../Container";

const AdsTwo = () => {
  return (
    <Link to={"/shop"} className="block">
      <Container>
        <div className="bg-[url('/src/assets/adsBg.jpg')] py-11 sm:py-[70px] md:py-30 lg:py-[165px] my-10 md:my-25 bg-no-repeat bg-center bg-cover"></div>
      </Container>
    </Link>
  )
}

export default AdsTwo