import "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  NavBar,
  CheckOut,
  SearchResults,
  ProductPage,
  PageNotFound,
  AllowNavBar,
  FooterBar,
  AllowFooterBar,
} from "./components";
function App() {
  return (
    <>
      <BrowserRouter>
        <AllowNavBar>
          <NavBar />
        </AllowNavBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <AllowFooterBar>
          <FooterBar />
        </AllowFooterBar>
      </BrowserRouter>
    </>
  );
}

export default App;
