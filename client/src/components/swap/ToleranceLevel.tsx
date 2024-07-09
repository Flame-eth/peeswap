import { useState } from "react";

type Props = {
  toleranceLevel: number;
  updateToleranceLevel: (level: number) => any;
};
export const ToleranceLevel = ({
  toleranceLevel,
  updateToleranceLevel,
}: Props) => {
  const [mode, setMode] = useState<"view" | "edit">("view");
  const [tLevel, setTLevel] = useState(toleranceLevel);

  const changeMode = (mode: "view" | "edit") => {
    setMode(mode);
  };

  const swithToEdit = () => changeMode("edit");
  const swithToView = () => changeMode("view");

  const saveAndSwitchToView = () => {
    updateToleranceLevel(tLevel);
    swithToView();
  };

  return (
    <div>
      {mode === "view" && (
        <ViewComponent
          switchToEdit={swithToEdit}
          toleranceLevel={toleranceLevel}
        />
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
  toleranceLevel,
}: {
  switchToEdit: () => any;
  toleranceLevel: number;
}) => {
  return (
    <div className="flex items-center ml-1">
      <p className="montserrat-all font-medium text-base-color text-sm">
        {toleranceLevel} %
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
          const value = e.target.value;
          if (!value) return setTLevel(0.0);
          if (isNaN(value)) return;
          if (Number(value) > 50) return setTLevel(50);
          setTLevel(value.slice(0, 5));
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
