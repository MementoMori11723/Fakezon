import "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  NavBar,
  CheckOut,
  SearchResults,
  ProductPage,
} from "./components";
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
