import { useState } from "react";
import { AssetDialog } from "../AssetDialog";
import { Asset } from "@/data";

type Props = {
  currentAsset: Asset;
  changeCurrentAsset: (asset: Asset) => any;
};
export const SwapCard = ({ currentAsset, changeCurrentAsset }: Props) => {
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
          {/* Asset info */}
          <div>
            <AssetDialog
              currentAsset={currentAsset}
              onChangeSelectedAsset={changeCurrentAsset}
            />
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
            <p className="text-gray-500 text-sm uppercase font-semibold montserrat-all">
              {(Math.random() * 8).toFixed(1)} {currentAsset.abbr}
            </p>
          </div>

          {/* Asset cost in basic currency */}
          <div>
            <p className="montserrat-all text-sm text-gray-500 font-semibold">
              &#8358;{" "}
              {Math.floor(Math.random() * 100000).toLocaleString("en-US")}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
