import { Link } from "react-router-dom";
import Container from "../Container";

const AdsTwo = () => {
  return (
    <Link to={"/shop"}>
      <Container>
        <div className="bg-[url('/src/assets/adsBg.jpg')] py-[70px] bg-no-repeat bg-center bg-cover max-w-[780px] lg:py-[165px] lg-w-full lg:bg-no-repeat lg:bg-cover lg:bg-center my-25"></div>
      </Container>
    </Link>
  )
}

export default AdsTwo