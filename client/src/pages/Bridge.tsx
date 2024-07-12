import { useState } from "react";
import { Currency, paymentCurrencies, receivingCurrencies } from "@/data";
import { BridgeCard } from "@/components/bridge/BridgeCard";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

type Props = {};
export const Bridge = ({}: Props) => {
  const [bridgeTo, setBridgeTo] = useState(receivingCurrencies[0]);
  const [bridgeFrom, setBridgeFrom] = useState(paymentCurrencies[1]);
  // const [stellarWalletConnected, setStellarWalletConnected] = useState(false);
  const { isConnected } = useAccount();
  const web3 = useWeb3Modal();
  const connectWallet = () => {
    web3.open();
  };

  const changeToCurrency = (data: Currency) => setBridgeTo(data);
  const changeFromCurrency = (data: Currency) => setBridgeFrom(data);

  const reverseTradeOrder = () => {
    const buying = { ...bridgeTo };
    const selling = { ...bridgeFrom };
    setBridgeFrom(buying);
    setBridgeTo(selling);
  };

  return (
    <>
      <div className="min-h-dvh flex justify-center items-center backdrop-blur-sm w-[90%] mx-auto flex-col">
        <div className="mb-2 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px]">
          <button className="text-gray-200 card px-6 py-2 rounded-lg montserrat-all text-sm font-medium">
            Bridge
          </button>
        </div>
        <div className="my-2">
          <p className="montserrat-all text-xs text-white">
            Connect your stellar wallet to select a token.
          </p>
        </div>
        <div className="black-bg p-2 rounded-lg md:rounded-xl w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] flex flex-col gap-0 relative">
          {/* Source coin */}
          <BridgeCard
            currentCurrency={bridgeFrom}
            changeCurrentCurrency={changeFromCurrency}
            currencies={paymentCurrencies}
            stellarWalletConnected={isConnected}
          />

          {/* Reverse trade */}
          <div className="relative h-0 mb-2">
            <button
              className="bg-base-color rounded-full w-14 h-14 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-8 border-[#131313] flex justify-center items-center"
              onClick={reverseTradeOrder}
            >
              <i className="bx bx-sort text-white flex text-xl"></i>
            </button>
          </div>

          {/* Destination coin */}
          <BridgeCard
            currentCurrency={bridgeTo}
            changeCurrentCurrency={changeToCurrency}
            currencies={receivingCurrencies}
            stellarWalletConnected={isConnected}
          />

          {!isConnected && (
            <button
              className="uppercase rounded-md md:rounded-lg mt-2 py-4 text-gray-300 montserrat-all font-medium bg-yellow-500 duration-500 transition hover:bg-opacity-80"
              onClick={connectWallet}
            >
              Connect Stellar wallet
            </button>
          )}
        </div>
      </div>
    </>
  );
};
