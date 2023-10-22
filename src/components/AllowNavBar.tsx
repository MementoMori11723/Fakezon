import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const AllowNavBar = ({ children }: any) => {
  const location = useLocation();
  const [showBar, setShowBar] = useState(false);
  const paths = ["/", "/checkout", "/search"];
  useEffect(() => {
    if (paths.includes(location.pathname)) setShowBar(true);
    else setShowBar(false);
  }, [location]);
  return <div>{showBar && children}</div>;
};
export default AllowNavBar;
