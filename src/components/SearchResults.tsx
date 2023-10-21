import { useEffect, useState } from "react";
import { CallAPI } from "../utils/CallApi";

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
    <div className="min-w-[1200px] max-w-[1300px] m-auto">
      {products &&
        products.map((p: any, k: any) => {
          return <div key={k}>{p.title}</div>;
        })}
    </div>
  );
};
export default SearchResults;
