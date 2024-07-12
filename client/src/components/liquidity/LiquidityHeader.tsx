import { SettingDropDown } from "./SettingDropDown";

type Props = {
  slippageLevel: number;
  setSlippageLevel: any;
  hopsLevel: number;
  setHopsLevel: any;
};
export const LiquidityHeader = ({
  slippageLevel,
  setSlippageLevel,
  hopsLevel,
  setHopsLevel,
}: Props) => {
  return (
    <div className="p-2 md:p-4 py-6 md:py-6 card mb-2 md:mb-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-300 montserrat-all">
          List of your liquidity positions
        </p>
        <SettingDropDown
          slippageLevel={slippageLevel}
          setSlippageLevel={setSlippageLevel}
          hopsLevel={hopsLevel}
          setHopsLevel={setHopsLevel}
        />
      </div>
    </div>
  );
};
