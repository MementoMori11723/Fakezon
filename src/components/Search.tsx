import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { CallAPI } from "../utils/CallApi";
import { useNavigate, createSearchParams } from "react-router-dom";

const Search = () => {
  const [suggestions, setSuggestions] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();
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
  const getSuggestions = () => {
    CallAPI(`data/suggestions.json`).then((sr) => {
      setSuggestions(sr);
    });
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
          className="flex grow items-center h-[100%] text-black"
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
            .filter((s: any) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = s.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((s: any) => (
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
