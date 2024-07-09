import stellarLogo from "@/assets/images/stellarx.png";
import stripeOne from "@/assets/images/stripe-1.png";
import stripeTwo from "@/assets/images/stripe-2.png";

type Props = {};
export const Intro = ({}: Props) => {
  return (
    <div className="min-h-dvh flex justify-center items-center backdrop-blur-sm w-[90%] mx-auto">
      <div className="min-h-dvh flex flex-col gap-16 md:flex-row md:gap-6 justify-center md:justify-center items-center w-[90%] mx-auto my-24 sm:mt-16 sm:mb-0 md:mt-0">
        {/* Background */}
        <div
          className="w-full h-full blur-xl absolute -z-[3] hidden md:block"
          style={{ backgroundImage: `url(${stripeOne})` }}
        ></div>
        <div
          className="w-full h-full blur-xl absolute -z-[3] md:hidden block"
          style={{ backgroundImage: `url(${stripeTwo})` }}
        ></div>

        {/* Left container */}
        <div className="md:flex-1 max-w-[500px]">
          <h2 className="text-white font-semibold text-2xl md:text-4xl mb-4 montserrat-all max-w-96 leading-normal md:leading-normal">
            Crypto Trading Made Easy
          </h2>
          <p className="text-gray-300 montserrat-all max-w-[450px] leading-lose md:leading-loose text-sm">
            Peeswap is a powerful decentralized trading platform built on the
            Stellar network. Connect your wallet and start trading every asset
            class imaginable in seconds. Access AMMs to earn passive income, on
            & off ramp with ease.
          </p>
          <button className="rounded-md md:rounded-lg mt-6 py-4 w-full max-w-[300px] text-gray-300 montserrat-all font-medium bg-yellow-500 duration-500 transition hover:bg-opacity-80">
            Get started now
          </button>
        </div>

        {/* Right container */}
        <div className="flex-col md:flex-1 w-full mx-auto justify-center flex items-center">
          <div>
            <img src={stellarLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};
