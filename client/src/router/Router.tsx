import {
  Home,
  BuyAndSell,
  Market,
  Swap,
  AMM,
  Bridge,
  Liquidity,
} from "../pages";
import { Routes, Route } from "react-router-dom";

export const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/swap" element={<Swap />} />
      <Route path="/buyandsell" element={<BuyAndSell />} />
      <Route path="/amm" element={<AMM />} />
      <Route path="/bridge" element={<Bridge />} />
      <Route path="/liquidity" element={<Liquidity />} />
    </Routes>
  );
};
