import USD from "@/assets/currencies/USD.png";
import EUR from "@/assets/currencies/EUR.png";
import NGN from "@/assets/currencies/NGN.png";
import GBP from "@/assets/currencies/GBP.png";
import AUD from "@/assets/currencies/AUD.png";
import BGN from "@/assets/currencies/BGN.png";
import BRL from "@/assets/currencies/BRL.png";
import CAD from "@/assets/currencies/CAD.png";
import CHF from "@/assets/currencies/CHF.png";
import CZK from "@/assets/currencies/CZK.png";
import DKK from "@/assets/currencies/DKK.png";
import BTC from "@/assets/currencies/BTC.png";
import ETH from "@/assets/currencies/ETH.png";
import LTC from "@/assets/currencies/LTC.png";
import USDC from "@/assets/currencies/USDC.png";
import XLM from "@/assets/currencies/XLM.png";
import ADA from "@/assets/currencies/ADA.png";
import ALGO from "@/assets/currencies/ALGO.png";
import ATOM from "@/assets/currencies/ATOM.png";
import AVAX from "@/assets/currencies/AVAX.png";
import BAT from "@/assets/currencies/BAT.png";
import BCH from "@/assets/currencies/BCH.png";
import DAI from "@/assets/currencies/DAI.png";
import DOGE from "@/assets/currencies/DOGE.png";
import EOS from "@/assets/currencies/EOS.png";
import LINK from "@/assets/currencies/LINK.png";
import SOL from "@/assets/currencies/SOL.png";
import USDT from "@/assets/currencies/USDT.png";
import XRP from "@/assets/currencies/XRP.png";
import XTZ from "@/assets/currencies/XTZ.png";
import ZRX from "@/assets/currencies/ZRX.png";

// MARKET PAIRS
import blnd from "@/assets/market-pair/blnd.png";
import btc from "@/assets/market-pair/btc.png";
import btcln from "@/assets/market-pair/btcln.png";
import cny from "@/assets/market-pair/cny.png";
import eth from "@/assets/market-pair/eth.png";
import lsp from "@/assets/market-pair/lsp.png";
import rio from "@/assets/market-pair/rio.png";
import usdc from "@/assets/market-pair/usdc.png";
import velo from "@/assets/market-pair/velo.svg";
import xlm from "@/assets/market-pair/xlm.svg";
import xrp from "@/assets/market-pair/xrp.png";
import xxa from "@/assets/market-pair/xxa.png";
import yxlm from "@/assets/market-pair/yxlm.png";
import ybtc from "@/assets/market-pair/ybtc.png";
import ltc from "@/assets/market-pair/ltc.png";
import brl from "@/assets/market-pair/brl.png";

export type PairType =
  | "blnd"
  | "btc"
  | "btcln"
  | "cny"
  | "eth"
  | "lsp"
  | "rio"
  | "usdc"
  | "velo"
  | "xlm"
  | "xrp"
  | "xxa"
  | "yxlm"
  | "ybtc"
  | "ltc"
  | "brl";

export type Currency = {
  name: string;
  imgUrl: string;
  abbr: string;
};

export const paymentCurrencies: Currency[] = [
  {
    name: "US Dollar",
    imgUrl: USD,
    abbr: "USD",
  },
  {
    name: "Naira",
    imgUrl: NGN,
    abbr: "NGN",
  },
  {
    name: "Euro",
    imgUrl: EUR,
    abbr: "EUR",
  },
  {
    name: "Pound Sterling",
    imgUrl: GBP,
    abbr: "GBP",
  },
  {
    name: "Australian Dollar",
    imgUrl: AUD,
    abbr: "AUD",
  },
  {
    name: "Bulgarian Lev",
    imgUrl: BGN,
    abbr: "BGN",
  },
  {
    name: "Brazilian Real",
    imgUrl: BRL,
    abbr: "BRL",
  },
  {
    name: "Canadian Dollar",
    imgUrl: CAD,
    abbr: "CAD",
  },
  {
    name: "Swiss Franc",
    imgUrl: CHF,
    abbr: "CHF",
  },
  {
    name: "Czech Koruna",
    imgUrl: CZK,
    abbr: "CZK",
  },
  {
    name: "Danish Krone",
    imgUrl: DKK,
    abbr: "DKK",
  },
];

export const receivingCurrencies: Currency[] = [
  {
    name: "Bitcoin",
    abbr: "BTC",
    imgUrl: BTC,
  },
  {
    name: "Ethereum",
    abbr: "ETH",
    imgUrl: BTC,
  },
  {
    name: "Litecoin",
    abbr: "LTC",
    imgUrl: LTC,
  },
  {
    name: "USD Coin (Stellar)",
    abbr: "XLM",
    imgUrl: XLM,
  },
  {
    name: "Cardano",
    abbr: "ADA",
    imgUrl: ADA,
  },
  {
    name: "Algorand",
    abbr: "ALGO",
    imgUrl: ALGO,
  },
  {
    name: "Cosmos",
    abbr: "ATOM",
    imgUrl: ATOM,
  },
  {
    name: "Avalanche (C-Chain)",
    abbr: "AVAX",
    imgUrl: AVAX,
  },
  {
    name: "Basic Attention Token",
    abbr: "BAT",
    imgUrl: BAT,
  },
  {
    name: "Bitcoin Cash",
    abbr: "BCH",
    imgUrl: BCH,
  },
  {
    name: "Dai",
    abbr: "DAI",
    imgUrl: DAI,
  },
  {
    name: "Dogecoin",
    abbr: "DOGE",
    imgUrl: DOGE,
  },
  {
    name: "EOS",
    abbr: "EOS",
    imgUrl: EOS,
  },
  {
    name: "Chainlink",
    abbr: "LINK",
    imgUrl: LINK,
  },
  {
    name: "Solana",
    abbr: "SOL",
    imgUrl: SOL,
  },
  {
    name: "USD Coin (ERC-20)",
    abbr: "USDC",
    imgUrl: USDC,
  },
  {
    name: "Tether (ERC-20)",
    abbr: "USDT",
    imgUrl: USDT,
  },
  {
    name: "XRP",
    abbr: "XRP",
    imgUrl: XRP,
  },
  {
    name: "Tezos",
    abbr: "XTZ",
    imgUrl: XTZ,
  },
  {
    name: "0x",
    abbr: "ZRX",
    imgUrl: ZRX,
  },
];

export const marketCurrenices: Record<PairType, Currency> = {
  blnd: {
    name: "BLND",
    abbr: "BLND",
    imgUrl: blnd,
  },
  btc: {
    name: "BTC",
    abbr: "BTC",
    imgUrl: btc,
  },
  btcln: {
    name: "BTCLN",
    abbr: "BTCLN",
    imgUrl: btcln,
  },
  cny: {
    name: "CNY",
    abbr: "CNY",
    imgUrl: cny,
  },
  eth: {
    name: "ETH",
    abbr: "ETH",
    imgUrl: eth,
  },
  lsp: {
    name: "LSP",
    abbr: "LSP",
    imgUrl: lsp,
  },
  rio: {
    name: "RIO",
    abbr: "RIO",
    imgUrl: rio,
  },
  usdc: {
    name: "USDC",
    abbr: "USDC",
    imgUrl: usdc,
  },
  velo: {
    name: "VELO",
    abbr: "VELO",
    imgUrl: velo,
  },
  xlm: {
    name: "XLM",
    abbr: "XLM",
    imgUrl: xlm,
  },
  xrp: {
    name: "XRP",
    abbr: "XRP",
    imgUrl: xrp,
  },
  xxa: {
    name: "XXA",
    abbr: "XXA",
    imgUrl: xxa,
  },
  yxlm: {
    name: "yXLM",
    abbr: "yXLM",
    imgUrl: yxlm,
  },
  ybtc: {
    name: "yBTC",
    abbr: "yBTC",
    imgUrl: ybtc,
  },
  ltc: {
    name: "LTC",
    abbr: "LTC",
    imgUrl: ltc,
  },
  brl: {
    name: "BRL",
    abbr: "BRL",
    imgUrl: brl,
  },
};
