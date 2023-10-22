import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ProductDetails } from "./";
import { GB_CURRENCY } from "../utils/constants";
import { removeFromCart } from "../redux/cartSlice";

const CheckOut = () => {
  const products = useSelector((state: any) => state.cart.products);
  const itemCount = useSelector((state: any) => state.cart.productsNumber);
  const dispach = useDispatch();
  const subtotal = useSelector((state: any) =>
    state.cart.products.reduce((s: any, p: any) => s + p.price * p.quantity, 0)
  );
  return (
    <div className="h-screen bg-fakezon-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10 ">
          <div className="col-span-6 bg-white">
            <div className="text-2xl xl:text-3xl m-4 p-2 font-bold">
              Shopping Cart
            </div>
            {products.map((p: any) => {
              return (
                <div key={p.id}>
                  <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                    <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                      <div className="col-span-2">
                        <Link to={`/product/${p.id}`}>
                          <img className="p-4 m-auto " src={p.image_small} />
                        </Link>
                      </div>
                      <div className="col-span-6 ">
                        <div className="font-medium text-black mt-2">
                          <Link to={`/product/${p.id}`}>
                            <ProductDetails p={p} r={false} />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-2xl xl:text-3xl mt-2 mr-4 font-semibold">
                        {GB_CURRENCY.format(p.price)}
                      </div>
                      <div className="grid grid-cols-3 w-20 text-center mt-2 bg-slate-200">
                        <div className="text-xl xl:text-2xl bg-gray-400 rounded">
                          -
                        </div>
                        <div className="text-lg xl:text-xl m-auto ">
                          {p.quantity}
                        </div>
                        <div className="text-xl xl:text-2xl bg-gray-400 rounded">
                          +
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => dispach(removeFromCart(p.id))}
                          className="text-sm xl:text-base text-white rounded bg-red-500 p-2 mb-1 mt-2"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-lg xl:text-xl text-right mb-4 mr-4 ">
              SubTotal (<span className="font-semibold">{itemCount} </span>
              items):{" "}
              <span className="font-bold">{GB_CURRENCY.format(subtotal)}</span>
            </div>
          </div>
          <div className="col-span-2 bg-white rounded h-[250px] p-7 ">
            <div className="text-xs xl:text-sm mb-3 pb-3 text-green-800">
              Your order qulifies for{" "}
              <span className="font-bold">Free Delivery</span>. Delivery Details
            </div>
            <div className="text-base xl:text-lg mb-5 pb-5">
              SubTotal (<span className="font-semibold">{itemCount} </span>
              items):{" "}
              <span className="font-bold mt-2">
                {GB_CURRENCY.format(subtotal)}
              </span>
            </div>
            <Link to="/" className="btn m-auto">
              Proceed to CheckOut
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
