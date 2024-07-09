import { Home, BuyAndSell, Market, Swap, AMM } from "../pages";
import { Routes, Route } from "react-router-dom";

export const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/swap" element={<Swap />} />
      <Route path="/buyandsell" element={<BuyAndSell />} />
      <Route path="/amm" element={<AMM />} />
    </Routes>
  );
};
