import { Header } from "@/components/market/Header";
import { TableHeader } from "@/components/market/TableHeader";
import { TableRow } from "@/components/market/TableRow";
import { marketPairs } from "@/data";

type Props = {};

export const Market = ({}: Props) => {
  return (
    <>
      <div className="h-dvh backdrop-blur-sm w-full mx-auto pt-16 overflow-hidden">
        <div className="w-full h-full">
          {/* Header */}
          <Header />

          {/* Market Price */}
          {/* Table Header */}
          <TableHeader />
          <div
            className="overflow-auto w-full custom-scrollbar"
            style={{ height: "calc(100vh - 192px)" }}
          >
            {marketPairs.map((pair) => (
              <TableRow {...pair} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
