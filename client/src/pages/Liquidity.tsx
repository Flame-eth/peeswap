import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { LiquidityHeader } from "@/components/liquidity/LiquidityHeader";
import { useState } from "react";

type Props = {};
export const Liquidity = ({}: Props) => {
  const { isConnected } = useAccount();
  const web3 = useWeb3Modal();
  const connectWallet = () => {
    web3.open();
  };
  const [slippageLevel, setSlippageLevel] = useState(0.5);
  const [hopsLevel, setHopsLevel] = useState(2);

  return (
    <>
      <div className="min-h-dvh flex justify-center items-center backdrop-blur-sm w-[90%] mx-auto flex-col">
        <div className="mb-2 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px]">
          <button className="text-gray-200 card px-6 py-2 rounded-lg montserrat-all text-base font-medium">
            Your Liquidity
          </button>
        </div>

        <div className="black-bg rounded-lg md:rounded-xl w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] flex flex-col gap-0 relative overflow-hidden">
          <LiquidityHeader
            slippageLevel={slippageLevel}
            setSlippageLevel={setSlippageLevel}
            hopsLevel={hopsLevel}
            setHopsLevel={setHopsLevel}
          />
          {!isConnected && (
            <div className="my-4">
              <p className="montserrat-all text-xs text-white text-center">
                Connect your wallet to view your liquity.
              </p>
            </div>
          )}
          {!isConnected && (
            <button
              className="uppercase rounded-md md:rounded-lg m-2 md:m-4 py-4 text-gray-300 montserrat-all font-medium bg-yellow-500 duration-500 transition hover:bg-opacity-80"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </>
  );
};
