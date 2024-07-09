import { MarketPair } from "@/data";
import classNames from "classnames";

interface Props extends MarketPair {}

export const TableRow = ({ pair, price, volume, change }: Props) => {
  return (
    <div className="p-4 py-2">
      {/* Table grid */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            {/* Pair logos */}
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 grid place-items-center bg-white rounded-md">
                <img
                  src={pair[0].imgUrl}
                  alt={pair[0].name}
                  className="rounded-full w-7 h-7"
                />
              </div>
              <div className="w-8 h-8 grid place-items-center bg-white rounded-md">
                <img
                  src={pair[1].imgUrl}
                  alt={pair[1].name}
                  className="rounded-full w-7"
                />
              </div>
            </div>

            <h3 className="text-xs montserrat-all text-white font-medium flex gap-1 items-center">
              {pair[0].abbr} / {pair[1].abbr}
            </h3>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex flex-col gap-1 items-end">
            <p className="text-xs montserrat-all text-white font-medium flex gap-1 items-center">
              {price} {pair[1].abbr}
            </p>
            <p className="text-[0.65rem] montserrat-all text-gray-400 font-medium flex gap-1 items-center">
              $
              {Number(
                (Number(price.replace(",", "")) * 0.9).toFixed(
                  price.split(".")[1].length
                )
              ).toLocaleString("en-US")}
            </p>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <p
            className={classNames(
              "text-xs montserrat-all text-gray-400 font-medium flex gap-1 items-center",
              {
                "text-orange-600": change.startsWith("-"),
                "text-green-500": change.startsWith("+"),
              }
            )}
          >
            {change}%
          </p>
        </div>
        <div className="hidden md:flex justify-end">
          <p className="text-xs montserrat-all text-white flex gap-1 items-center">
            ${volume}
          </p>
        </div>
      </div>
    </div>
  );
};
