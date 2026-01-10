import { Link } from "react-router-dom";
import Container from "../Container";

const AdsTwo = () => {
  return (
    <Link to={"/shop"}>
      <Container>
        <div className="bg-[url('/src/assets/adsBg.jpg')] py-[70px] bg-no-repeat bg-center bg-cover lg:py-[165px] my-25"></div>
      </Container>
    </Link>
  )
}

export default AdsTwo