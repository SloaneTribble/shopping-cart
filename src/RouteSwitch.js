import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./Nav";
import CartContainer from "./shop/CartContainer";
import { ShopContainer } from "./shop/ShopContainer";

const RouteSwitch = () => {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<ShopContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
