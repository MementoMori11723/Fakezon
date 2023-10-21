import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CallAPI } from "../utils/CallApi";
import { ProductDetails } from "./";
import { GB_CURRENCY } from "../utils/constants";

const ProductPage = () => {
  const { id }: any = useParams();
  const [product, setProduct] = useState<any>([]);
  const getProduct = () => {
    CallAPI(`data/products.json`).then((pr) => {
      setProduct(pr[id]);
    });
  };
  useEffect(() => getProduct(), []);
  if (!product?.title) return <h1>Loading Product ...</h1>;
  return (
    product && (
      <div className="h-screen bg-fakezon-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
          <div className="grid grid-cols-10">
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
                Price: {GB_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-lg text-red-500 line-through text-right font-semibold">
                Old price: {GB_CURRENCY.format(product.oldPrice)}
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
                <select className="p-2 bg-white border rounded-md focus:border-indigo-600">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <button className="bg-yellow-400 p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default ProductPage;
