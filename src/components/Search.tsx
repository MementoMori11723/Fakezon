import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { CallAPI } from "../utils/CallApi";
import {
  useNavigate,
  createSearchParams,
  BrowserRouter,
} from "react-router-dom";

const Search = () => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();
  console.log(suggestions + " " + category);
  const getSuggestions = () => {
    CallAPI(`data/suggestions.json`).then((sr) => {
      setSuggestions(sr);
    });
  };
  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });
    setSearchTerm("");
    setCategory("All");
  };
  useEffect(() => getSuggestions(), []);
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-fakezon-yellow rounded">
        <select
          className="p-2 bg-gray-300 h-10 w-[75px] text-black border rounded-l text-xs xl:text-sm"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Deals</option>
          <option>Fakezon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          className="flex grow items-center h-[100%] text-black p-2"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="w-[45px]" onClick={onHandleSubmit}>
          <MagnifyingGlassIcon className="h-[22px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter((s) => {
              const cst = searchTerm.toLowerCase();
              const title = s.title.toLowerCase();
              return cst && title.startsWith(cst) && title !== cst;
            })
            .slice(0, 10)
            .map((s) => (
              <div key={s.id} onClick={() => setSearchTerm(s.title)}>
                {s.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default Search;
