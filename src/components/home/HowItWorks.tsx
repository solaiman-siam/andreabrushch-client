import { howItWorksData } from "../../lib/staticData"
import Container from "../shared/Container"
import SectionTitle from "../shared/SectionTitle"


function HowItWorks() {
  return (
    <div className="bg-[#F8F8F8] py-24">

        <Container>
            <div className="">
                <SectionTitle innerText="How It Works" className="pb-16"/>
                <div className="grid grid-cols-3 gap-20">
                    {
                      howItWorksData.map(item => (
                        <div className="flex gap-6 ">
                          <img className="w-20 h-20 " src={item.icon} alt="" />
                          <div>
                            <h3 className="text-xl font-semibold pb-3">{item.title}</h3>
                            <p className="text-description font-light">{item.description}</p>
                          </div>
                        </div>
                      ))
                    }
                </div>
            </div>
        </Container>


        
    </div>
  )
}

export default HowItWorks