import { useState } from "react";
import { Currency } from "@/data";
import { BridgeDialog } from "../BridgeDialog";

type Props = {
  currentCurrency: Currency;
  changeCurrentCurrency: (currency: Currency) => any;
  stellarWalletConnected: boolean;
  currencies: Currency[];
};
export const BridgeCard = ({
  currentCurrency,
  changeCurrentCurrency,
  stellarWalletConnected,
  currencies,
}: Props) => {
  const [quantity, setQuantity] = useState("");

  const onChange = (e: any) => {
    // Remove any non-digit or non-decimal point characters
    let formattedValue = e.target.value.replace(/[^\d+.]/gm, "");

    // Remove extra decimal points, if any
    const parts = formattedValue.split(".");
    if (parts.length > 2) {
      formattedValue = parts[0] + "." + parts.slice(1).join("");
    }

    // Ensure no leading zeroes unless the number is zero or a decimal part
    formattedValue = formattedValue.replace(/^0+(?!$|\.|0)/, "");
    setQuantity(formattedValue);
  };

  return (
    <div className="card px-4 py-5 rounded-md md:rounded-lg w-full">
      <div className="flex flex-col gap-2">
        {/* Header */}
        <header className="flex justify-between items-start">
          {/* Currency info */}
          <div>
            {stellarWalletConnected ? (
              <BridgeDialog
                currencies={currencies}
                currentCurrency={currentCurrency}
                onChangeSelectedAsset={changeCurrentCurrency}
              />
            ) : (
              <button className="rounded-md gap-1 md:gap-2 flex items-center duration-300 transition-colors p-2 black-bg">
                <p className="text-xs font-medium text-white md:text-sm montserrat-all">
                  Select Token
                </p>

                <i className="flex text-base text-white fi fi-rr-angle-small-down md:text-xl"></i>
              </button>
            )}
          </div>

          {/* Amount input */}
          <div className="flex-1 overflow-hidden">
            <input
              type="text"
              className="border-none outline-none text-white text-2xl md:text-3xl montserrat-all font-medium bg-transparent placeholder:text-gray-300 text-right w-full"
              placeholder="0.00"
              value={quantity}
              onChange={onChange}
            />
          </div>
        </header>

        {/* Badge */}
        <div className="flex justify-end">
          <p className="p-1 rounded-sm transparent-white text-gray-400 text-xs montserrat-all font-semibold">
            MAX
          </p>
        </div>

        {/* Footer */}
        <footer className="flex justify-between items-center">
          {/* Walet */}
          <div className="flex items-center gap-2">
            <i className="fi fi-br-wallet-buyer flex text-gray-500 text-base"></i>
            {stellarWalletConnected ? (
              <p className="text-gray-500 text-sm uppercase font-semibold montserrat-all">
                {(Math.random() * 8).toFixed(1)} {currentCurrency.abbr}
              </p>
            ) : (
              <p className="text-gray-500 text-sm uppercase font-semibold montserrat-all">
                -
              </p>
            )}
          </div>

          {/* Currency cost in basic currency */}
          <div>
            {stellarWalletConnected ? (
              <p className="montserrat-all text-sm text-gray-500 font-semibold">
                &#8358;{" "}
                {Math.floor(Math.random() * 100000).toLocaleString("en-US")}
              </p>
            ) : (
              <p className="montserrat-all text-sm text-gray-500 font-semibold">
                -
              </p>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
};
