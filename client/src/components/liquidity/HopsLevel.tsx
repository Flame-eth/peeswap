import { useState } from "react";

type Props = {
  hopsLevel: number;
  updateHopsLevel: (level: number) => any;
};
export const HopsLevel = ({ hopsLevel, updateHopsLevel }: Props) => {
  const [mode, setMode] = useState<"view" | "edit">("view");
  const [tLevel, setTLevel] = useState(hopsLevel);

  const changeMode = (mode: "view" | "edit") => {
    setMode(mode);
  };

  const swithToEdit = () => changeMode("edit");
  const swithToView = () => changeMode("view");

  const saveAndSwitchToView = () => {
    updateHopsLevel(tLevel);
    swithToView();
  };

  return (
    <div>
      {mode === "view" && (
        <ViewComponent switchToEdit={swithToEdit} hopsLevel={hopsLevel} />
      )}
      {mode === "edit" && (
        <EditComponent
          saveAndSwitchToView={saveAndSwitchToView}
          tLevel={tLevel}
          setTLevel={setTLevel}
        />
      )}
    </div>
  );
};

const ViewComponent = ({
  switchToEdit,
  hopsLevel,
}: {
  switchToEdit: () => any;
  hopsLevel: number;
}) => {
  return (
    <div className="flex items-center ml-1">
      <p className="montserrat-all font-medium text-base-color text-sm">
        {hopsLevel} %
      </p>
      <button
        className="p-2 hover:bg-[#222222] rounded-sm"
        onClick={switchToEdit}
      >
        <i className="fi fi-rr-pencil text-gray-300 flex text-sm rotate-3"></i>
      </button>
    </div>
  );
};

const EditComponent = ({ tLevel, setTLevel, saveAndSwitchToView }: any) => {
  console.log(tLevel);

  return (
    <div className="flex items-center ">
      <input
        placeholder={tLevel}
        className="montserrat-all font-sembibold text-gray-500 text-sm placeholder:text-gray-500 bg-transparent border-b border-b-gray-500 outline-none text-right w-10"
        onChange={(e: any) => {
          // Remove any non-digit or non-decimal point characters
          let formattedValue = e.target.value.replace(/[^\d+.]/gm, "");

          // Remove extra decimal points, if any
          const parts = formattedValue.split(".");
          if (parts.length > 2) {
            formattedValue = parts[0] + "." + parts.slice(1).join("");
          }

          // Ensure no leading zeroes unless the number is zero or a decimal part
          formattedValue = formattedValue.replace(/^0+(?!$|\.|0)/, "");

          formattedValue =
            Math.min(Number(formattedValue), 100) === 100
              ? "100"
              : formattedValue.slice(0, 5);

          setTLevel(formattedValue);
        }}
        value={tLevel}
      />
      <button
        className="p-2 hover:bg-[#222222] rounded-sm ml-1"
        onClick={saveAndSwitchToView}
      >
        <i className="fi fi-br-check flex text-sm rotate-3 text-base-color"></i>
      </button>
    </div>
  );
};
