import { Currency, marketCurrenices } from "./currencies";

export interface MarketPair {
  pair: [Currency, Currency];
  price: string;
  change: string;
  volume: string;
}

export const marketPairs: MarketPair[] = [
  {
    pair: [marketCurrenices["xlm"], marketCurrenices["usdc"]],
    price: "0.0836",
    change: "-7.52",
    volume: "1.10M",
  },
  {
    pair: [marketCurrenices["velo"], marketCurrenices["xlm"]],
    price: "0.0900",
    change: "-1.13",
    volume: "159.36K",
  },
  {
    pair: [marketCurrenices["xrp"], marketCurrenices["xlm"]],
    price: "5.0208",
    change: "+0.84",
    volume: "77.79K",
  },
  {
    pair: [marketCurrenices["yxlm"], marketCurrenices["xlm"]],
    price: "1.0000",
    change: "+0.04",
    volume: "69.08K",
  },
  {
    pair: [marketCurrenices["rio"], marketCurrenices["xlm"]],
    price: "12.2685",
    change: "-2.36",
    volume: "41.18K",
  },
  {
    pair: [marketCurrenices["xxa"], marketCurrenices["xlm"]],
    price: "0.1235",
    change: "-4.27",
    volume: "28.56K",
  },
  {
    pair: [marketCurrenices["velo"], marketCurrenices["usdc"]],
    price: "0.0075496",
    change: "-7.86",
    volume: "21.58K",
  },
  {
    pair: [marketCurrenices["velo"], marketCurrenices["xrp"]],
    price: "0.0179",
    change: "-2.01",
    volume: "17.28K",
  },
  {
    pair: [marketCurrenices["btc"], marketCurrenices["usdc"]],
    price: "55,782.06",
    change: "+9.04",
    volume: "16.58K",
  },
  {
    pair: [marketCurrenices["btc"], marketCurrenices["xlm"]],
    price: "665,749.15",
    change: "+2.78",
    volume: "15.44K",
  },
  {
    pair: [marketCurrenices["eth"], marketCurrenices["usdc"]],
    price: "2,905.22",
    change: "-4.85",
    volume: "13.96K",
  },
  {
    pair: [marketCurrenices["velo"], marketCurrenices["yxlm"]],
    price: "0.0902",
    change: "-0.99",
    volume: "11.27K",
  },
  {
    pair: [marketCurrenices["btc"], marketCurrenices["eth"]],
    price: "19.1203",
    change: "+0.44",
    volume: "6.49K",
  },
  {
    pair: [marketCurrenices["lsp"], marketCurrenices["xlm"]],
    price: "0.0545",
    change: "-2.81",
    volume: "4.89K",
  },
  {
    pair: [marketCurrenices["btc"], marketCurrenices["ybtc"]],
    price: "1.0000",
    change: "-0.01",
    volume: "4.13K",
  },
  {
    pair: [marketCurrenices["btc"], marketCurrenices["xlm"]],
    price: "665,675.31",
    change: "+3.13",
    volume: "3.73K",
  },
  {
    pair: [marketCurrenices["btcln"], marketCurrenices["xlm"]],
    price: "0.0066606",
    change: "+3.68",
    volume: "3.78K",
  },
  {
    pair: [marketCurrenices["xrp"], marketCurrenices["yxlm"]],
    price: "5.0113",
    change: "+1.00",
    volume: "3.50K",
  },
  {
    pair: [marketCurrenices["yxlm"], marketCurrenices["usdc"]],
    price: "0.0836",
    change: "-7.92",
    volume: "3.21K",
  },
  {
    pair: [marketCurrenices["eth"], marketCurrenices["xlm"]],
    price: "34,931.79",
    change: "+1.03",
    volume: "2.04K",
  },
  {
    pair: [marketCurrenices["btc"], marketCurrenices["ltc"]],
    price: "888.84",
    change: "-0.01",
    volume: "1.84K",
  },
  {
    pair: [marketCurrenices["ybtc"], marketCurrenices["xlm"]],
    price: "665,760.87",
    change: "+3.89",
    volume: "1.79K",
  },
  {
    pair: [marketCurrenices["btc"], marketCurrenices["btcln"]],
    price: "99,999,950.00",
    change: "-0.01",
    volume: "1.41K",
  },
  {
    pair: [marketCurrenices["lsp"], marketCurrenices["usdc"]],
    price: "0.0045824",
    change: "-9.69",
    volume: "1.36K",
  },
  {
    pair: [marketCurrenices["blnd"], marketCurrenices["xlm"]],
    price: "0.5587",
    change: "-3.83",
    volume: "1.32K",
  },
  {
    pair: [marketCurrenices["cny"], marketCurrenices["xlm"]],
    price: "1.6146",
    change: "+1.61",
    volume: "1.30K",
  },
  {
    pair: [marketCurrenices["rio"], marketCurrenices["yxlm"]],
    price: "12.2527",
    change: "-2.53",
    volume: "1.25K",
  },
  {
    pair: [marketCurrenices["xlm"], marketCurrenices["brl"]],
    price: "0.5194",
    change: "-1.44",
    volume: "1.22K",
  },
  {
    pair: [marketCurrenices["brl"], marketCurrenices["usdc"]],
    price: "0.1624",
    change: "-5.45",
    volume: "1.04K",
  },
  {
    pair: [marketCurrenices["eth"], marketCurrenices["xlm"]],
    price: "27,133.00",
    change: "+2.78",
    volume: "1.03K",
  },
];
