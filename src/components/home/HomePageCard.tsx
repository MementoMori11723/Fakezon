import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HomePageCard = ({ title, img, link }: any) => {
  return (
    <Link to={`/search?category=All`}>
      <div className="h-[420px] bg-white z-30 m-3">
        <div className="text-lg xl:text-xl font-semibold ml-4 mt-4 p-2">
          {title}
        </div>
        <div className="h-[300px] m-4">
          <img src={img} className="h-[100%] w-[100%] object-cover" />
        </div>
        <div className="text-xs xl:text-sm text-blue-400 ml-4">{link}</div>
      </div>
    </Link>
  );
};
export default HomePageCard;
