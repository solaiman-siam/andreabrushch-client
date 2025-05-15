import { Calendar, MapPinned } from "lucide-react"
import Container from "../shared/Container"
import SectionTitle from "../shared/SectionTitle"


function ExploreEvents() {
  return (
    <div className="py-24">
        <Container>
            <div>
                <SectionTitle innerText="Explore Events"/>

                <div className="grid grid-cols-2 gap-8">

                    <div className="grid grid-cols-2 gap-8">
                        <div className="w-full overflow-hidden rounded-xl">
                            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div>
                            <h3>Volcano Hike To Mt. Liamuiga (Highest Peak On Island)</h3>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <MapPinned />
                                    <h4>8751 W Main, San Juan</h4>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar />
                                    <h4>May 15, 2025</h4>
                                </div>
                            </div>

                            <div>
                                <h4>584 reviews</h4>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Container>
    </div>
  )
}

export default ExploreEvents