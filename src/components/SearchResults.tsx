import { useEffect, useState } from "react";
import { CallAPI } from "../utils/CallApi";
import { Link } from "react-router-dom";
import { ProductDetails } from "./";
import { GB_CURRENCY } from "../utils/constants";

const SearchResults = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const [products, setProducts] = useState<any>([]);
  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");
    CallAPI(`data/search.json`).then((sr) => {
      const cr = sr[category || "All"];
      if (searchTerm) {
        const results = cr.filter((p: any) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(cr);
      }
    });
  };
  useEffect(() => getSearchResults(), [searchParams]);
  return (
    <div className="min-w-[1000px] max-w-[1300px] m-auto">
      {products &&
        products.map((p: any, k: any) => {
          return (
            <Link key={k} className="m-1" to={`/product/${p.id}`}>
              <div className="h-[250px] grid grid-cols-12 rounded mt-4 mb-1">
                <div className="col-span-2 p-4 bg-gray-400">
                  <img className="h-[100%] m-auto" src={p.image_small} />
                </div>
                <div className="col-span-10 p-12 bg-gray-100 border border-gray-200 hover:bg-gray-200">
                  <div className="font-medium text-black p-2">
                    <ProductDetails p={p} r={true} />
                    <div className="text-xl xl:text-2xl pt-1">
                      {GB_CURRENCY.format(p.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};
export default SearchResults;
