import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./Nav";
import ShopContainer from "./shop/ShopContainer";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<ShopContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
