import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 4500 }}
        spaceBetween={0}
        className="h-[50%]"
      >
        {Array.from({length:5},(_,i) => (
          <SwiperSlide key={i}>
            <img src={`../images/carousel_${i}.jpg`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900 "></div>
    </div>
  );
};
export default Carousel;
