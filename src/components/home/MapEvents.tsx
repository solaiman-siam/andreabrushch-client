import { imageProvider } from "../../lib/imageProvider"
import Container from "../shared/Container"
import SectionTitle from "../shared/SectionTitle"


function MapEvents() {
  return (
    <div className="py-20">
        <Container>
            <div>
                <SectionTitle className="pb-24" innerText="Map of Events"></SectionTitle>
                <img className="w-full" src={imageProvider.AndreaMap} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default MapEvents