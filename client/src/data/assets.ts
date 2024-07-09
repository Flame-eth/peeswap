import ethereum from "@/assets/asset-icons/ethereum.png";
import arbitrum from "@/assets/asset-icons/arbitrum.png";
import optimism from "@/assets/asset-icons/optimism.png";
import polygon from "@/assets/asset-icons/polygon.png";
import base from "@/assets/asset-icons/base.png";
import bnb_chain from "@/assets/asset-icons/bnb_chain.png";
import avalanche from "@/assets/asset-icons/avalanche.png";
import celo from "@/assets/asset-icons/celo.png";
import blast from "@/assets/asset-icons/blast.png";
import zora from "@/assets/asset-icons/zora.png";
import zksync from "@/assets/asset-icons/zksync.png";
import usdc from "@/assets/assest-icons/usdc.png";
import xlm from "@/assets/assest-icons/xlm.png";

export type Asset = {
  name: string;
  imgUrl: string;
  abbr: string;
};

export const assets: Asset[] = [
  {
    name: "Xlm",
    imgUrl:xlm,
    abbr: "XLM",
  },
  {
    name: "usdc coin",
    imgUrl:usdc,
    abbr: "USDC",
  },
  {
    name: "Ethereum",
    imgUrl: ethereum,
    abbr: "ETH",
  },
  {
    name: "Arbitrum",
    imgUrl: arbitrum,
    abbr: "ARB",
  },
  {
    name: "Optimism",
    imgUrl: optimism,
    abbr: "OP",
  },
  {
    name: "Polygon",
    imgUrl: polygon,
    abbr: "MATIC",
  },
  {
    name: "Base",
    imgUrl: base,
    abbr: "BASE",
  },
  {
    name: "BNB Chain",
    imgUrl: bnb_chain,
    abbr: "BNB",
  },
  {
    name: "Avalanche",
    imgUrl: avalanche,
    abbr: "AVAX",
  },
  {
    name: "Celo",
    imgUrl: celo,
    abbr: "CELO",
  },
  {
    name: "Blast",
    imgUrl: blast,
    abbr: "BLAST",
  },
  {
    name: "Zora",
    imgUrl: zora,
    abbr: "ZORA",
  },
  {
    name: "ZKsync",
    imgUrl: zksync,
    abbr: "ZK",
  },
];
