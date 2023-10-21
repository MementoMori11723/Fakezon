import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop By Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 6 }, (_, i) => (
          <SwiperSlide key={i}>
            <img src={`../images/category_${i}.jpg`} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CarouselCategory;
