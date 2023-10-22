import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Search } from "./";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const cart = useSelector((state: any) => state.cart.productsNumber);
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-fakezon text-white h-[60px]">
        <div className="flex items-center m-4 ">
          <Link
            className="hover:border-gray-200 border-transparent border"
            to={"/"}
          >
            <img
              className="h-[35px] w-[100px] m-2"
              src={"../images/amazon.png"}
            />
          </Link>
          <div className="pr-4 pl-4 hover:border-gray-200 border-transparent border">
            <div className="text-xs xl:text-sm">Delivery to</div>
            <div className="text-sm xl:text-base font-bold flex">
              <img className="h-[20px] w-[20px]" src={"../location.svg"} />
              Hyderabad
            </div>
          </div>
        </div>
        <div className="flex grow relative items-center">
          <Search />
        </div>
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4 hover:border-gray-200 border-transparent border">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4 hover:border-gray-200 border-transparent border">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
            <div className="pr-3 pl-3 flex hover:border-gray-200 border-transparent border">
              <ShoppingCartIcon className="h-[38px] mt-2" />
              <div className="relative m-1">
                <div className="absolute right-[9px] text-sm font-semibold m-2 pt-[2px] text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-fakezon-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6 gap-2">
        <div className="hover:border-gray-300 border-transparent border">
          Today's Deals
        </div>
        <div className="hover:border-gray-300 border-transparent border">
          Customer Service
        </div>
        <div className="hover:border-gray-300 border-transparent border">
          Registry
        </div>
        <div className="hover:border-gray-300 border-transparent border">
          Gift Cards
        </div>
        <div className="hover:border-gray-300 border-transparent border">
          Sell
        </div>
        <div className="hover:border-gray-300 border-transparent border">
          Prime
        </div>
        <div className="hover:border-gray-300 border-transparent border">
          About Us
        </div>
      </div>
    </header>
  );
};
export default NavBar;
