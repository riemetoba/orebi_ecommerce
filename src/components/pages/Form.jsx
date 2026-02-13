import { MdKeyboardArrowRight } from "react-icons/md"
import Container from "../Container"


const Form = () => {
  return (
    <div>
        <Container>
             <h3 className="pt-40 font-DM text-5xl font-bold text-deepBlack">
                      Contacts
                    </h3>
                    <div className="flex items-center gap-x-4 pt-8 text-[12px] font-DM text-[#767676] pb-25">
                      <div className="flex items-center gap-4">
                        <h6>Home</h6>
                        <MdKeyboardArrowRight className="pt-0.5" />
                      </div>
                      <div className="">Contacts</div>
                    </div>
        </Container>
    </div>
  )
}

export default Form