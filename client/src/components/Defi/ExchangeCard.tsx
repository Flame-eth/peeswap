import classNames from "classnames";

const directionMap: Record<string, string> = {
  bull: "fi fi-sr-caret-down text-[#ff5f52]",
  bear: "fi fi-sr-caret-up text-[#40b66b]",
};

const directionColorMap: Record<string, string> = {
  bull: "text-[#ff5f52]",
  bear: "text-[#40b66b]",
};

interface ExchangeCardProps {
  name: string;
  shortName: string;
  direction: string;
  value: string;
  percentage: string;
  iconUrl: string;
}

const ExchangeCard = ({
  iconUrl,
  name,
  shortName,
  value,
  direction,
  percentage,
}: ExchangeCardProps) => {
  return (
    <button className="border-none outline-none black-bg p-5 md:px-6 rounded-2xl duration-200 hover:scale-105 hover:bg-[var(--card-bg)] origin-center overflow-hidden">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={iconUrl} className="w-8 rounded-full" />
          <div className="flex items-center gap-2">
            <p className="font-medium text-white lg:text-xl xl:text-2xl montserrat-all">
              {name}
            </p>
            <p className="gray-text montserrat-all text-xl lg:text-xl xl:text-2xl">
              {shortName}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium text-white text-xl lg:text-xl xl:text-2xl montserrat-all">
            {value}
          </p>
          <div className="flex items-center gap-1 md:hidden lg:flex">
            <i
              className={classNames(
                directionMap[direction],
                "flex text-xl lg:text-xl xl:text-2xl"
              )}
            ></i>
            <p
              className={classNames(
                directionColorMap[direction],
                "montserrat-all text-xl lg:text-xl xl:text-2xl font-medium"
              )}
            >
              {percentage}%
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ExchangeCard;
