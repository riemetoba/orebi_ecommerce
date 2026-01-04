
import { Link } from "react-router-dom";
const Banner = () => {
  return (
   <Link to={"/shop"}>
      <div className="bg-[url('/src/assets/bannerBg.jpg')] lg:py-[300px] lg:bg-no-repeat lg:bg-cover lg:bg-center py-[70px] bg-no-repeat bg-cover bg-center"></div>
    </Link>
  )
}

export default Banner