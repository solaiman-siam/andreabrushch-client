import { imageProvider } from "../../lib/imageProvider";
import Container from "../shared/Container";
import HeroSwiper from "./HeroSwiper";
import { DatePicker, type DatePickerProps } from 'antd';
function Hero() {


  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};


  return (
    <div className="pt-6 pb-24 ">
      <Container>
        <div className="">
          <div className=" h-[800px] flex-col rounded-lg overflow-hidden relative flex items-center ">
            <h1 className="text-6xl w-6/12 text-center relative z-[5] font-bold pt-20 leading-[70px]">
              Explore Unique Tours and Cultural Events Near You
            </h1>
            <img
              className="w-full absolute z-[2] top-0 left-0 object-cover h-full"
              src={imageProvider.HeroImage}
              alt="hero_image"
            />

            <div className="bg-black/20 absolute w-full h-full z-[3] top-0 left-0"></div>

            <div className="bg-white rounded-lg flex items-center gap-4 mt-14 p-4 relative z-[4]">
              <div>
                <input className="border rounded-[5px] hover:border-primary01 transition-all duration-200 focus:border-primary01 focus:outline-none placeholder:text-black/25 text-sm px-4 py-[9px] border-black/18" type="text" placeholder="Going to" name="" id="" />
              </div>
              <div>
                <input className="border  px-4 py-[9px] text-sm hover:border-primary01 transition-all duration-200 focus:outline-none focus:border-primary01 border-black/18  rounded-[5px] placeholder:text-black/25" type="text" placeholder="Location" name="" id="" />
              </div>
              <div>
               <DatePicker className="h-10 w-52" onChange={onChange} />
              </div>
              <div>
                <button className="px-8 py-2 rounded-sm cursor-pointer bg-primary01 text-white">Search</button>
              </div>
            </div>
            <div className="relative w-full pt-20 z-[8] px-8">
                <HeroSwiper/>
            </div>

            <img className="absolute top-8 w-80 left-0 z-[8]" src={imageProvider.RocketRight} alt="" />
            <img className="absolute top-8  w-80 right-0 z-[8]" src={imageProvider.RocketLeft} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
