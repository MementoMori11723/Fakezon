import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CallAPI } from "../../utils/CallApi";
import { NavBar, ProductDetails, FooterBar } from "..";
import { GB_CURRENCY } from "../../utils/constants";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { id }: any = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [product, setProduct] = useState<any>([]);
  const dispach = useDispatch();
  const [quantity, setQuantity] = useState("1");
  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity));
    return product;
  };
  const getProduct = () => {
    CallAPI(`data/products.json`).then((pr) => {
      setProduct(pr[id]);
    });
  };
  const limit = product.price > product.oldPrice ? product.price - product.oldPrice : product.oldPrice - product.price
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getProduct(), []);
  if (!product?.title) return <h1>Loading Product ...</h1>;
  return (
    product && (
      <>
        <NavBar />
        <div className="h-screen bg-fakezon-background">
          <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
            <div className="grid grid-cols-10 gap-2">
              <div className="col-span-3 p-8 bg-white rounded m-auto">
                <img src={product.image} />
              </div>
              <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
                <div className="mb-3">
                  <ProductDetails p={product} r={true} />
                </div>
                <div className="text-base xl:text-lg mt-3">
                  {product.description}
                </div>
              </div>
              <div className="col-span-2 p-4 rounded bg-white">
                <div className="text-xl text-right xl:text-2xl font-semibold">
                  Price: {GB_CURRENCY.format((product.price * (product.oldPrice - product.price)))}
                </div>
                <div className="text-base xl:text-lg text-red-500 line-through text-right font-semibold">
                  Old price: {GB_CURRENCY.format((product.oldPrice * (product.oldPrice - product.price)))}
                </div>
                <div className="text-sm text-blue-400 mt-3 xl:text-base">
                  Free Returns
                </div>
                <div className="text-sm mt-1 text-blue-700 xl:text-base">
                  Free Delivery
                </div>
                <div className="text-base xl:text-lg mt-1 text-green-500 font-semibold">
                  In Stock
                </div>
                <div className="text-base xl:text-lg mt-1">
                  Quantity:{" "}
                  <select
                    onChange={(e) => setQuantity(e.target.value)}
                    className="p-2 bg-white border rounded-md focus:border-indigo-600"
                  >
                    {Array.from({length: limit},(_,i) => (
                      <option>{i}</option>
                    ))}
                  </select>
                </div>
                <Link to={"/checkout"}>
                  <button
                    onClick={() => dispach(addToCart(addQuantityToProduct()))}
                    className="btn"
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FooterBar />
      </>
    )
  );
};
export default ProductPage;
