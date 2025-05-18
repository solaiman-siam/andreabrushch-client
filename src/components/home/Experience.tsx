import Container from "../shared/Container"
import SectionTitle from "../shared/SectionTitle"
import { Image } from "antd";

function Experience() {
  return (
    <div className="py-24">
        <Container>
            <div>
                <div className="flex justify-center ">
                    <SectionTitle innerText="What Do You Want to Experience?" className="w-4/12 text-center "></SectionTitle>
                </div>

                <div className="pt-16">
                    <div className="grid grid-cols-4 gap-6">
                        <div className="col-span-1 h-[400px] relative overflow-hidden rounded-xl group">
                            <img className="w-full h-full absolute z-[1] top-0 left-0 rounded-xl group-hover:scale-110 object-cover transition-all duration-300" src="https://images.unsplash.com/photo-1747217684909-dae62489c497?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="w-full h-full top-0 left-0 bg-black/20 z-[2] absolute">

                            </div>
                            <h3 className="absolute bottom-8 z-[4] font-medium capitalize text-white -translate-x-1/2 left-1/2">Historic Tours</h3>
                        </div>
                        <div className="col-span-1 h-[400px] relative overflow-hidden rounded-xl group">
                            <img className="w-full h-full absolute z-[1] top-0 left-0 rounded-xl group-hover:scale-110 object-cover transition-all duration-300" src="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="w-full h-full top-0 left-0 bg-black/20 z-[2] absolute">

                            </div>
                            <h3 className="absolute bottom-8 z-[4] font-medium capitalize text-white -translate-x-1/2 left-1/2">Historic Tours</h3>
                        </div>
                        <div className="col-span-2 h-[400px] relative overflow-hidden rounded-xl group">
                            <img className="w-full h-full absolute z-[1] top-0 left-0 rounded-xl group-hover:scale-110 object-cover transition-all duration-300" src="https://plus.unsplash.com/premium_photo-1661764174171-c29f85bd8a37?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="w-full h-full top-0 left-0 bg-black/20 z-[2] absolute">

                            </div>
                            <h3 className="absolute bottom-8 z-[4] font-medium capitalize text-white -translate-x-1/2 left-1/2">Historic Tours</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6 pt-6">
                        <div className="col-span-2 h-[400px] relative overflow-hidden rounded-xl group">
                            <img className="w-full h-full absolute z-[1] top-0 left-0 rounded-xl group-hover:scale-110 object-cover transition-all duration-300" src="https://images.unsplash.com/photo-1569949380643-6e746ecaa3bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="w-full h-full top-0 left-0 bg-black/20 z-[2] absolute">

                            </div>
                            <h3 className="absolute bottom-8 z-[4] font-medium capitalize text-white -translate-x-1/2 left-1/2">Historic Tours</h3>
                        </div>
                        <div className="col-span-1 h-[400px] relative overflow-hidden rounded-xl group">
                            <img className="w-full h-full absolute z-[1] top-0 left-0 rounded-xl group-hover:scale-110 object-cover transition-all duration-300" src="https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="w-full h-full top-0 left-0 bg-black/20 z-[2] absolute">

                            </div>
                            <h3 className="absolute bottom-8 z-[4] font-medium capitalize text-white -translate-x-1/2 left-1/2">Historic Tours</h3>
                        </div>
                        <div className="col-span-1 h-[400px] relative overflow-hidden rounded-xl group">
                            <img className="w-full h-full absolute z-[1] top-0 left-0 rounded-xl group-hover:scale-110 object-cover transition-all duration-300" src="https://plus.unsplash.com/premium_photo-1718146019167-110481171ad2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="w-full h-full top-0 left-0 bg-black/20 z-[2] absolute">

                            </div>
                            <h3 className="absolute bottom-8 z-[4] font-medium capitalize text-white -translate-x-1/2 left-1/2">Historic Tours</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Experience