import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ethLogo from "@/assets/icons/eth.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Asset, assets } from "@/data";

interface AssetDialogProps {
  currentAsset?: Asset;
  onChangeSelectedAsset: (data: Asset) => any;
}

export function AssetDialog({
  currentAsset = assets[0],
  onChangeSelectedAsset,
}: AssetDialogProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownState = (state: any) => setIsDropdownOpen(state);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md gap-1 md:gap-2 flex items-center hover:bg-[#222222] duration-300 transition-colors">
          <img
            src={currentAsset.imgUrl}
            className="w-6 h-6 rounded-full object-contain md:w-9 md:h-9"
          />
          <div className="flex flex-col items-start gap-[2px]">
            <span className="text-white font-medium text-xs md:text-sm montserrat-all">
              {currentAsset.name}
            </span>
            <span className="text-gray-500 font-semibold uppercase text-xs montserrat-all">
              {currentAsset.abbr}
            </span>
          </div>
          <i className="fi fi-rr-angle-small-down text-white flex text-base md:text-xl"></i>
        </button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px] border-[#ffffff12] black-bg rounded-2xl min-h-[80vh] flex flex-start flex-col"
        style={{ borderRadius: "1rem" }}
      >
        <DialogHeader>
          <DialogTitle className="text-base montserrat-all">
            Select an asset
          </DialogTitle>
        </DialogHeader>
        <div>
          <div className="w-full">
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative flex items-center gap-2 rounded-xl card px-2 py-1 border border-[#ffffff12] overflow-hidden flex-1">
                <div className="w-8 h-8 flex justify-center items-center">
                  <i className="fi fi-br-search text-gray-500 text-base flex"></i>
                </div>
                <input
                  type="text"
                  className="flex-1 outline-none border-none bg-transparent placeholder:text-gray-500 montserrat-all text-xs font-medium text-gray-500"
                  placeholder="Type asset name or home domain"
                />
              </div>

              {/* Coin dropdown */}
              <DropdownMenu onOpenChange={handleDropdownState}>
                <DropdownMenuTrigger>
                  <button className="card flex justify-between items-center gap-1 p-2 rounded-xl">
                    <img
                      src={currentAsset.imgUrl}
                      alt={`${currentAsset.name} logo`}
                      className="w-5 h-5 object-contain rounded-md"
                    />
                    {isDropdownOpen ? (
                      <i className="fi fi-rr-angle-small-up text-gray-500 flex text-xl md:text-2xl"></i>
                    ) : (
                      <i className="fi fi-rr-angle-small-down text-gray-500 flex text-xl md:text-2xl"></i>
                    )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black border border-[#ffffff12] rounded-xl black-bg min-w-56 gap-0 flex flex-col">
                  {assets.map((asset) => (
                    <DropdownMenuItem
                      className="cursor-pointer text-gray-300 hover:text-[#ffffff12] rounded-xl p-3 flex items-center justify-between"
                      onClick={() => onChangeSelectedAsset(asset)}
                    >
                      <div className="w-full flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <img
                            src={asset.imgUrl}
                            alt={`${asset.name} logo`}
                            className="w-5 h-5 object-contain rounded-md"
                          />
                          <span className="montserrat-all font-medium text-sm text-gray-300">
                            {asset.name}
                          </span>
                        </div>
                        {currentAsset.name === asset.name && (
                          <div>
                            <i className="fi fi-br-check flex text-yellow-500 text-base"></i>
                          </div>
                        )}
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
