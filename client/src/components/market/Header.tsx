type Props = {};

const currencies = ["USD", "EUR", "XLM", "BTC", "ETH", "AQUA"];

export const Header = ({}: Props) => {
  return (
    <header className="p-4 flex justify-between items-center border-b border-b-gray-800">
      {/* Left */}
      <div className="flex-1 overflow-auto mr-8">
        <div className="flex gap-4 items-center">
          <p className="text-sm font-semibold montserrat-all text-nowrap">
            TOP VOLUME
          </p>
          <ul className="flex gap-3 items-center">
            {currencies.map((currency) => (
              <li>
                <button className="text-xs montserrat-all font-medium text-gray-400 hover:text-white">
                  {currency}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right */}
      <div className="min-w-max">
        <div className="flex gap-3 items-center">
          <button className="text-gray-400 hover:text-white duration-300 transition-colors">
            <i className="fi fi-rr-search flex"></i>
          </button>
          <button className="text-gray-400 hover:text-white duration-300 transition-colors">
            <i className="bx bx-dock-right flex text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};
