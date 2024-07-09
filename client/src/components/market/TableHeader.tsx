type Props = {};
export const TableHeader = ({}: Props) => {
  return (
    <div className="p-4 border-b border-b-gray-800">
      {/* Table grid */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="text-sm montserrat-all text-gray-400 font-medium flex gap-1 items-center">
            PAIR<i className="bx bx-expand-alt -rotate-45 text-xs"></i>
          </h3>
        </div>
        <div className="flex justify-end">
          <h3 className="text-sm montserrat-all text-gray-400 font-medium flex gap-1 items-center">
            PRICE<i className="bx bx-expand-alt -rotate-45 text-xs"></i>
          </h3>
        </div>
        <div className="hidden md:flex justify-end">
          <h3 className="text-sm montserrat-all text-gray-400 font-medium flex gap-1 items-center">
            CHANGE 24H<i className="bx bx-expand-alt -rotate-45 text-xs"></i>
          </h3>
        </div>
        <div className="hidden md:flex justify-end">
          <h3 className="text-sm montserrat-all text-gray-400 font-medium flex gap-1 items-center">
            VOLUME 24H<i className="bx bx-expand-alt -rotate-45 text-xs"></i>
          </h3>
        </div>
      </div>
    </div>
  );
};
