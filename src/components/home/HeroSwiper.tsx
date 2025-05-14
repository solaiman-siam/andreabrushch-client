// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

function HeroSwiper() {
  return (
    <div className="">
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[ Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="  rounded-xl overflow-hidden h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1585818838907-067c27b8a601?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="guide_image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  rounded-xl overflow-hidden h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1724754604549-f48d1caab92a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  rounded-xl overflow-hidden h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1718146019640-445ef39ef25a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  rounded-xl overflow-hidden h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1724754604549-f48d1caab92a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-primary01 rounded-xl overflow-hidden h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1585818838907-067c27b8a601?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="guide_image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-primary01 rounded-xl overflow-hidden h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1724754604549-f48d1caab92a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-primary01 rounded-xl overflow-hidden h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1718146019640-445ef39ef25a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-primary01 rounded-xl overflow-hidden h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1724754604549-f48d1caab92a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSwiper;
