import ethLogo from "../assets/icons/eth.png";
import daiLogo from "../assets/icons/dai.png";
import { AssetDialog } from "@/components/AssetDialog";
import { useState } from "react";
import { Asset, assets } from "@/data";
import { SwapCard } from "@/components/swap/SwapCard";
import { ToleranceLevel } from "@/components/swap/ToleranceLevel";

type Props = {};
export const Swap = ({}: Props) => {
  const [swapTo, setSwapTo] = useState(assets[0]);
  const [swapFrom, setSwapFrom] = useState(assets[1]);
  const [toleranceLevel, setToleranceLevel] = useState(0.5);

  const changeToAsset = (data: Asset) => setSwapTo(data);
  const changeFromAsset = (data: Asset) => setSwapFrom(data);

  const reverseTradeOrder = () => {
    const buying = { ...swapTo };
    const selling = { ...swapFrom };
    setSwapFrom(buying);
    setSwapTo(selling);
  };

  return (
    <>
      <div className="min-h-dvh flex justify-center items-center backdrop-blur-sm w-[90%] mx-auto flex-col">
        <div className="mb-2 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px]">
          <button className="text-gray-200 card px-6 py-2 rounded-lg montserrat-all text-sm font-medium">
            Swap
          </button>
        </div>
        <div className="black-bg p-2 rounded-lg md:rounded-xl w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] flex flex-col gap-0 relative">
          {/* Source coin */}
          <SwapCard
            currentAsset={swapFrom}
            changeCurrentAsset={changeFromAsset}
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
          <SwapCard currentAsset={swapTo} changeCurrentAsset={changeToAsset} />

          {/* Aside */}
          <aside className="flex flex-col items-center gap-1 my-7">
            {/* Marker price */}
            <p className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-xs montserrat-all font-semibold text-gray-500">
                <i className="bx bx-trending-up flex text-base font-bold"></i>
                Trade
              </span>
              <span className="text-gray-300 montserrat-all text-xs font-semibold">
                1 {swapFrom.abbr} = {(Math.random() * 8).toFixed(1)}{" "}
                {swapTo.abbr}
              </span>
            </p>

            {/* Tolerance level */}
            <p className="text-white flex items-center">
              <span className="flex items-center gap-1 text-sm montserrat-all font-semibold text-gray-500">
                Slippage tolerance ={" "}
                <span>
                  <ToleranceLevel
                    toleranceLevel={toleranceLevel}
                    updateToleranceLevel={setToleranceLevel}
                  />
                </span>
              </span>
            </p>
          </aside>

          <button className="uppercase rounded-md md:rounded-lg mt-2 py-4 text-gray-300 montserrat-all font-medium bg-yellow-500 duration-500 transition hover:bg-opacity-80">
            Connect wallet
          </button>
        </div>
      </div>
    </>
  );
};
