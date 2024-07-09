import ethLogo from "../../assets/icons/eth.png";
import daiLogo from "../../assets/icons/dai.png";
type Props = {};

export const Intro = ({}: Props) => {
  return (
    <div className="min-h-dvh flex justify-center items-center backdrop-blur-sm w-[90%] mx-auto">
      <div className="w-full flex flex-col items-center mt-16 md:mt-20">
        <h1 className="text-gray-300 text-3xl sm:text-5xl font-medium sm:font-semibold montserrat-all text-center mb-6">
          Swap anytime, <br />
          anywhere.
        </h1>
        <div className="black-bg p-2 rounded-2xl md:rounded-3xl w-[90%] max-w-[400px] sm:max-w-[450px] md:max-w-[500px] flex flex-col gap-0 relative">
          <div className="card p-4 rounded-xl md:rounded-2xl w-full hover:border hover:border-gray-800">
            <p className="text-[#9b9b9b] montserrat-all text-xs font-medium md:base">
              Sell
            </p>
            <div className="my-2 flex justify-between items-center">
              {/* <p className="text-[#9b9b9b] text-2xl md:text-3xl montserrat-all font-medium">
                0
              </p> */}
              <input
                type="text"
                className="border-none outline-none text-[#9b9b9b] text-2xl md:text-3xl montserrat-all font-medium bg-transparent flex-1 inline-block max-w-24"
                placeholder="0"
              />
              <button className="rounded-full black-bg p-1 gap-1 md:p-2 md:gap-2 flex items-center border-[1px] border-gray-800">
                <img
                  src={ethLogo}
                  className="w-6 h-6 object-contain md:w-7 md:h-7"
                />
                <span className="text-white font-medium uppercase text-sm md:text-base">
                  ETH
                </span>
                <i className="fi fi-rr-angle-small-down text-white flex text-xl md:text-2xl"></i>
              </button>
            </div>
          </div>
          <div className="relative h-0 mb-1">
            <button className="card rounded-xl w-10 h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#131313] flex justify-center items-center">
              <i className="fi fi-rr-arrow-small-down text-white flex text-xl md:text-2xl"></i>
            </button>
          </div>
          <div className="card p-4 rounded-xl md:rounded-2xl w-full hover:border hover:border-gray-800">
            <p className="text-[#9b9b9b] montserrat-all text-xs font-medium md:base">
              Buy
            </p>
            <div className="my-2 flex justify-between items-center">
              <input
                type="text"
                className="border-none outline-none text-[#9b9b9b] text-2xl md:text-3xl montserrat-all font-medium bg-transparent flex-1 inline-block max-w-24"
                placeholder="0"
              />
              <button className="rounded-full black-bg p-1 gap-1 md:p-2 md:gap-2 flex items-center border-[1px] border-gray-800">
                <img
                  src={daiLogo}
                  className="w-6 h-6 object-contain md:w-7 md:h-7"
                />
                <span className="text-white font-medium uppercase text-sm md:text-base">
                  DAI
                </span>
                <i className="fi fi-rr-angle-small-down text-white flex text-xl md:text-2xl"></i>
              </button>
            </div>
          </div>
          <div className="card p-4 rounded-xl md:rounded-2xl w-full mt-1">
            <p className="text-[#9b9b9b] montserrat-all text-xl font-semibold text-center opacity-60">
              Connecting wallet...
            </p>
          </div>
          <div className="w-full bg-transparent px-4 py-3 flex items-center justify-between">
            <p className="text-gray-300 text-xs montserrat-all font-medium">
              1 ETH = 3,594.13 DAI{" "}
              <span className="gray-text font-[inherit]">($3,581.29)</span>
            </p>
            <p className="gray-text flex items-center text-xs montserrat-all font-medium">
              <i className="fi fi-rr-gas-pump-alt flex text-sm"></i>
              <span className="font-[inherit] ml-1">$5.68</span>
              <i className="fi fi-rr-angle-small-down flex text-xl md:text-2xl"></i>
            </p>
          </div>
        </div>
        <div className="w-full py-6">
          <p className="text-center gray-text opacity-60 montserrat-all font-medium text-sm max-w-sm mx-auto">
            The largest onchain marketplace. Buy and sell crypto on Ethereum and
            7+ other chains.
          </p>
        </div>
      </div>
    </div>
  );
};
