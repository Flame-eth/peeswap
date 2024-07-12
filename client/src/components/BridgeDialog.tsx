import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Currency } from "@/data";

interface BridgeDialogProps {
  currentCurrency: Currency;
  onChangeSelectedAsset: (data: Currency) => any;
  currencies: Currency[];
}

export function BridgeDialog({
  currentCurrency,
  onChangeSelectedAsset,
  currencies,
}: BridgeDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <button className="rounded-md gap-1 md:gap-2 flex items-center hover:bg-[#222222] duration-300 transition-colors">
          <img
            src={currentCurrency.imgUrl}
            className="w-6 h-6 rounded-full object-contain md:w-9 md:h-9"
          />
          <div className="flex flex-col items-start gap-[2px]">
            <span className="text-white font-medium text-xs md:text-sm montserrat-all">
              {currentCurrency.name}
            </span>
            <span className="text-gray-500 font-semibold uppercase text-xs montserrat-all">
              {currentCurrency.abbr}
            </span>
          </div>
          <i className="fi fi-rr-angle-small-down text-white flex text-base md:text-xl"></i>
        </button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px] border-[#ffffff12] black-bg rounded-2xl h-full max-h-[80vh] flex flex-start flex-col overflow-hidden"
        style={{ borderRadius: "1rem" }}
      >
        <DialogHeader>
          <DialogTitle className="text-base montserrat-all">
            Select an currency
          </DialogTitle>
        </DialogHeader>
        <div className="h-full overflow-hidden">
          <div className="w-full h-full overflow-hidden">
            <div className="flex gap-2 flex-col h-full overflow-hidden">
              {/* Search */}
              <div className="relative flex items-center gap-2 rounded-xl card px-2 py-1 border border-[#ffffff12] flex-1">
                <div className="w-8 h-8 flex justify-center items-center">
                  <i className="fi fi-br-search text-gray-500 text-base flex"></i>
                </div>
                <input
                  type="text"
                  className="flex-1 outline-none border-none bg-transparent placeholder:text-gray-500 montserrat-all text-xs font-medium text-gray-500"
                  placeholder="Type asset name or home domain"
                />
              </div>

              {/* Coin list */}
              <div className="overflow-auto h-full w-full border-t border-t-[#ffffff12] pt-4 custom-scrollbar">
                <div className="flex flex-col gap-1">
                  {currencies.map((currency) => (
                    <button
                      className="cursor-pointer text-gray-300 rounded-xl p-3 flex items-center justify-start gap-2 hover:bg-[#ffffff12]"
                      onClick={() => {
                        onChangeSelectedAsset(currency);
                        setIsOpen(false);
                      }}
                    >
                      <div>
                        <img
                          src={currency.imgUrl}
                          alt={`${currency.name} logo`}
                          className="w-8 h-8 object-contain rounded-md"
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <h4 className="text-sm montserrat-all font-medium">
                          {currency.abbr}
                        </h4>
                        <p className="text-xs montserrat-all text-gray-300">
                          {currency.name}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
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
