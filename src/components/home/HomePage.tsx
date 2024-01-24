import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "..";
const HomePage = () => {
  const titles = ["We have a surprise for you","Watch The Rings of Power","Unlimited Streaming","More titles to explore","Shop Pet Supplies","Spring Sale","Echo Buds","Family Plan: 3 months free"]
  const links = ["See terms and conditions","Start streaming now","Find out more","Browse Kindle Unlimited","See more","See the deals","See more","Learn more"]
  return (
    <div className="bg-fakezon-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {Array.from({length:8},(_,i) =>(
            <HomePageCard
                title={titles[i]}
                img={`../images/home_grid_${i}.jpg`}
                link={links[i]}
            />
          ))}
          <div className="m-3 pt-8">
            <img
              src={"../images/banner_image_2.jpg"}
              alt=""
              className="xl:hidden"
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img
            className="h-[100%] w-[100%] m-auto"
            src={"./images/banner_image.jpg"}
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
