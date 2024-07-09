import DefiCard from "./DefiCard";
import ethIcon from "../../assets/icons/eth.png";
import usdIcon from "../../assets/icons/usdcoin.png";
import peeIcon from "../../assets/icons/peeswap.png";
import lidoIcon from "../../assets/icons/lido.png";
import ExchangeCard from "./ExchangeCard";
import walletImg from "../../assets/images/wallet.png";
import stripeOne from "@/assets/images/stripe-1.png";
import stripeTwo from "@/assets/images/stripe-2.png";
import stripeThree from "@/assets/images/stripe-3.png";
import stripeFour from "@/assets/images/stripe-7.png";
import { IDefiData } from "@/interfaces";

const exchanges = [
	{
		name: "Ethereum",
		shortName: "ETH",
		direction: "bull",
		value: "$3,557.55",
		percentage: "0.23",
		iconUrl: ethIcon,
	},
	{
		name: "USD Coin",
		shortName: "USDC",
		direction: "bear",
		value: "$1.00",
		percentage: "0.00",
		iconUrl: usdIcon,
	},
	{
		name: "Peeswap",
		shortName: "PEE",
		direction: "bull",
		value: "$11.08",
		percentage: "3.66",
		iconUrl: peeIcon,
	},
	{
		name: "Lido DAO",
		shortName: "LDO",
		direction: "bear",
		value: "$2.12",
		percentage: "6.59",
		iconUrl: lidoIcon,
	},
];

const defiData = [
	{
		heading: "Web app",
		description:
			"Swapping made simple. Access thousands of tokens on 8+ chains",
		color: "blue",
		badgeIcon: "fi fi-sr-computer",
		bgImage: stripeTwo,
	},
	{
		heading: "Peeswap wallet",
		description:
			"The wallet built for swapping. Available for iOS and Android.",
		color: "pink",
		badgeIcon: "fi fi-sr-wallet",
		bgImage: stripeOne,
	},
	{
		heading: "Developer docs",
		description: "Build the next generation of open applications and tools.",
		color: "green",
		badgeIcon: "fi fi-sr-api",
		bgImage: stripeThree,
	},
	{
		heading: "Liquidity",
		description:
			"Provide liquidity to pools on the Peeswap Protocol and earn fees on swaps.",
		color: "purple",
		badgeIcon: "fi fi-ss-chart-simple",
		bgImage: stripeFour,
		backgroundClassNames: "rotate-[-60deg]",
	},
];

type Props = {};

export const Defi = ({}: Props) => {
	return (
		<div className="py-8 md:py-16 w-[90%] mx-auto relative z-10">
			<div className="w-full">
				<h1 className="text-white montserrat-all font-medium text-2xl md:text-3xl">
					Go direct to DeFi
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
					{defiData.map((data: IDefiData, id: number) => (
						<DefiCard key={id} {...data} />
					))}
					{/* <DefiCard
            color={"blue"}
            badgeIcon={"fi fi-sr-computer"}
            badgeText={"Web app"}
          >
            <h2 className="text-[#2abdff] montserrat-all font-medium text-xl sm:text-2xl md:text-[28px] mt-4">
              Swapping made simple. <br />
              Access thousands of tokens on 8+ chains
            </h2>
            <div className="mt-12 w-full flex flex-col gap-2">
              {exchanges.map((exchange) => (
                <ExchangeCard {...exchange} />
              ))}
            </div>
          </DefiCard>
          <DefiCard
            color={"pink"}
            badgeIcon={"fi fi-sr-wallet"}
            badgeText={"Peeswap wallet"}
            className="overflow-hidden flex flex-col pb-0 justify-between"
          >
            <h2 className="text-[#fc72ff] montserrat-all font-medium text-xl sm:text-2xl md:text-[26px] mt-4">
              The wallet built for swapping. <br />
              Available for iOS and Android.
            </h2>
            <div className="flex-1 mt-4 overflow-hidden h-300px md:h-full lg:max-h-[400px] flex justify-center w-full items-end lg:items-start">
              <img
                src={walletImg}
                className="h-full text-center object-contain object-bottom"
              />
            </div>
          </DefiCard>
          <DefiCard
            color={"green"}
            badgeIcon={"fi fi-sr-api"}
            badgeText={"Developer docs"}
          >
            <h2 className="text-[#00c3a0] montserrat-all font-medium text-xl sm:text-2xl md:text-[26px] mt-6 mb-10 md:mb-0 md:mt-16">
              Build the next generation of open applications and tools.
            </h2>
          </DefiCard>
          <DefiCard
            color={"purple"}
            badgeIcon={"fi fi-ss-chart-simple"}
            badgeText={"Liquidity"}
          >
            <h2 className="text-[#9e62ff] montserrat-all font-medium text-xl sm:text-2xl md:text-[26px] mt-6 mb-10 md:mb-0 md:mt-16">
              Provide liquidity to pools on the Peeswap Protocol and earn fees
              on swaps.
            </h2>
          </DefiCard> */}
				</div>
			</div>
		</div>
	);
};
