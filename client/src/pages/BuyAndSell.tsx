import { useState } from "react";
import { Asset, paymentCurrencies, receivingCurrencies } from "@/data";
import { BuyAndSellDialog } from "@/components/BuyAndSellDialog";
import { TradeCard } from "@/components/trade/TradeCard";

type Props = {};
export const BuyAndSell = ({}: Props) => {
  const [youGet, setYouGet] = useState(receivingCurrencies[0]);
  const [youPay, setYouPay] = useState(paymentCurrencies[0]);

  const changeReceivingCurrency = (data: Asset) => setYouGet(data);
  const changePaymentCurrency = (data: Asset) => setYouPay(data);

  return (
    <>
      <div className="min-h-dvh flex flex-col gap-16 md:flex-row md:gap-6 justify-center md:justify-center items-center w-[90%] mx-auto my-24 sm:mt-16 sm:mb-0 md:mt-0">
        {/* Left container */}
        <div className="md:flex-1 max-w-[500px]">
          <h2 className="text-white font-bold text-2xl md:text-4xl mb-4 montserrat-all leading-relaxed md:leading-relaxed">
            Buy Lumens (Stellar) instantly
          </h2>
          <p className="text-gray-300 montserrat-all max-w-[450px] leading-lose md:leading-loose text-xs md:text-sm">
            StellarX is a trusted place where you can easily buy Lumens
            (Stellar) and other cryptocurrencies instantly using a credit or
            debit card, bank transfer, Apple Pay, Google Pay, and more.
          </p>
          <ul className="list-inside list-disc ml-4 mt-6 flex flex-col gap-2">
            <li className="montserrat-all font-medium">
              No registration required
            </li>
            <li className="montserrat-all font-medium">
              Work with Apple Pay & Google Pay
            </li>
            <li className="montserrat-all font-medium">
              Available in 150+ countries (including US)
            </li>
            <li className="montserrat-all font-medium">
              No KYC for small amounts
            </li>
          </ul>
        </div>

        {/* Right container */}
        <div className="backdrop-blur-sm flex-col md:flex-1 w-full mx-auto justify-center flex items-center">
          <div className="black-bg p-2 rounded-2xl md:rounded-3xl w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] flex flex-col gap-2 relative">
            {/* Source coin */}
            <TradeCard
              tagText="You Pay"
              currentCurrency={youPay}
              currencies={paymentCurrencies}
              changeCurrentCurrency={changePaymentCurrency}
            />

            {/* Destination coin */}
            <TradeCard
              tagText="You Get"
              currentCurrency={youGet}
              currencies={receivingCurrencies}
              changeCurrentCurrency={changeReceivingCurrency}
            />

            <button className="uppercase rounded-md md:rounded-lg mt-2 py-3 text-gray-300 montserrat-all font-medium bg-yellow-500 duration-500 transition hover:bg-opacity-80">
              Buy {youGet.name}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
