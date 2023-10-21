import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CallAPI } from "../utils/CallApi";
const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<any>();
  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");
    CallAPI(`data/search.json`).then((sr) => {
      const cr = sr[category || ""];
      if (searchTerm) {
        const result = cr.filter(
          products.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(result);
      } else {
        setProducts(cr);
      }
    });
  };
  useEffect(() => getSearchResults(), [searchParams]);
  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto">
      {products &&
        products.map((p: any, k: any) => {
          <div key={k}>{p.title}</div>;
        })}
    </div>
  );
};
export default SearchResults;
