import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlippageLevel } from "./SlippageLevel";
import { HopsLevel } from "./HopsLevel";

type Props = {
  slippageLevel: number;
  setSlippageLevel: any;
  hopsLevel: number;
  setHopsLevel: any;
};

export const SettingDropDown = ({
  slippageLevel,
  setSlippageLevel,
  hopsLevel,
  setHopsLevel,
}: Props) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button className="flex items-center justify-between gap-1 p-2 card rounded-xl">
            <i className="flex text-xl text-base-color fi fi-sr-settings md:text-2xl"></i>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black border border-[#ffffff12] rounded-xl black-bg min-w-64 gap-0 flex flex-col">
          <div
            style={{ background: "var(--black-background)" }}
            className="p-3 flex justify-between"
          >
            <div className="flex items-center gap-2">
              <p className="montserrat-all font-semibold text-sm">
                Max Slippage
              </p>
              <i className="fi fi-rr-interrogation flex text-sm"></i>
            </div>
            <SlippageLevel
              slippageLevel={slippageLevel}
              updateSlippageLevel={setSlippageLevel}
            />
          </div>
          <div
            style={{ background: "var(--black-background)" }}
            className="p-3 flex justify-between"
          >
            <div className="flex items-center gap-2">
              <p className="montserrat-all font-semibold text-sm">Max Hops</p>
              <i className="fi fi-rr-interrogation flex text-sm"></i>
            </div>
            <HopsLevel hopsLevel={hopsLevel} updateHopsLevel={setHopsLevel} />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
