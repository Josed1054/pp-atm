import clsx from "clsx";

export enum LINE_SIDE {
  LEFT = "left",
  RIGHT = "right",
}

interface IATMScreenProps {
  options: {
    label: string;
    disabled: boolean;
    position: string;
    lineSide: LINE_SIDE;
  }[];
}

export default function ATMScreen({ options }: Readonly<IATMScreenProps>) {
  return (
    <div className="bg-[#7EB4D5] border-4 grid grid-cols-2 grid-rows-6 gap-3 border-[#E1E1D6] row-start-2 w-full h-54">
      <div className="col-span-2 row-span-2 flex flex-col items-center justify-center gap-2">
        <p className="text-white text-sm">Welcome to the ATM</p>
        <p className="text-white text-xs">Please enter your PIN</p>
      </div>
      {options.map((option) => (
        <div
          key={option.label}
          className={clsx(
            "col-span-1 flex items-center gap-1 row-span-1",
            option.position,
            option.disabled && "opacity-50",
            option.lineSide === "right" && "justify-end"
          )}
        >
          {option.lineSide === "left" && <div className="w-3 h-1 bg-white" />}
          <p className="text-white text-xs">{option.label}</p>
          {option.lineSide === "right" && <div className="w-3 h-1 bg-white" />}
        </div>
      ))}
    </div>
  );
}
