import Container from "../shared/Container";
import HeroSwiper from "./HeroSwiper";

function Hero() {
  return (
    <div className="py-6 ">
      <Container>
        <div className="px-10">
          <div className=" h-[800px] flex-col rounded-lg overflow-hidden relative flex items-center ">
            <h1 className="text-6xl w-6/12 text-center relative z-[5] font-bold pt-20 leading-[70px]">
              Explore Unique Tours and Cultural Events Near You
            </h1>
            <img
              className="w-full absolute z-[2] top-0 left-0 object-cover h-full"
              src="https://img.freepik.com/premium-vector/joyful-woman-walking-with-friend-holding-wine-glass_1138841-45483.jpg?semt=ais_hybrid&w=740"
              alt="hero_image"
            />

            <div className="bg-black/20 absolute w-full h-full z-[3] top-0 left-0"></div>

            <div className="bg-white rounded-lg flex items-center gap-4 mt-14 p-4 relative z-[4]">
              <div>
                <input className="border rounded-sm  px-4 py-2 border-black/10" type="text" placeholder="Going To" name="" id="" />
              </div>
              <div>
                <input className="border rounded-sm  px-4 py-2 border-black/10" type="text" placeholder="Location" name="" id="" />
              </div>
              <div>
                <input className="border rounded-sm  px-4 py-2 border-black/10" type="text" placeholder="Date" name="" id="" />
              </div>
              <div>
                <button className="px-8 py-2 rounded-sm cursor-pointer bg-primary01 text-white">Search</button>
              </div>
            </div>
            <div className="relative w-full pt-20 z-[8] px-8">
                <HeroSwiper/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
