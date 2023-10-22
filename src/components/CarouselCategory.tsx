import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  const getCategory = (i: any) => {
    switch (i) {
      case 0:
        return "Deals";
      case 1:
        return "Amazon";
      case 2:
        return "Fashion";
      case 3:
        return "Computers";
      case 4:
        return "Home";
      case 5:
        return "Mobiles";
    }
  };
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
            <a href={`/search?category=${getCategory(i)}`}>
              <img src={`../images/category_${i}.jpg`} alt="" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CarouselCategory;
